const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const crypto = require("crypto-js");

const errorHandler = require(`${__dirname}/../utils/errorHandler`);

const currentWeek = () => {
	let today = new Date();
	let firstDayOfYear = new Date(today.getFullYear(), 0, 1);
	let pastDaysOfYear = (today - firstDayOfYear) / 86400000;
	return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() - 1) / 7);
}

const totalStatisticValues = (statistics) => {
	const returnObj = {};

	["downloads", "reviews", "accountCreations", "packageUploads", "versionUploads"].forEach(key => {
		returnObj[key] = (statistics.length > 1) ? statistics.map(week => week[key]).reduce((a, b) => a + b) : statistics[0][key];
	});
	return returnObj;
}

/**
 * GET /
 * Gets all current public statistics from current month
 * 
 * @returns A JSON array containing all statistics of the current month
 */
router.get("/", (req, res) => {
	const { Statistic } = req.models;

	Statistic.findAll({
		attributes: {
			exclude: ["id", "createdAt"]
		},
		where: {
			year: new Date().getFullYear(),
			month: new Date().getMonth()
		},
		order: [
			["year", "ASC"],
			["month", "ASC"],
			["week", "ASC"]
		]
	}).then(statistics => {
		if (!statistics || !statistics.length) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Current month does not have any statistics"
		});

		const statisticsObj = {
			weeks: statistics,
			total: totalStatisticValues(statistics)
		}

		return res.status(200).send(statisticsObj);
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /week
 * Gets statistics from the current week (if existing)
 * 
 * @returns A JSON object containing all statistics of the current week
 */
router.get("/week", (req, res) => {
	const { Statistic } = req.models;

	Statistic.findOne({
		attributes: {
			exclude: ["id", "createdAt"]
		},
		where: {
			year: new Date().getFullYear(),
			month: new Date().getMonth(),
			week: currentWeek()
		},
		order: [
			["year", "ASC"],
			["month", "ASC"],
			["week", "ASC"]
		]
	}).then(statisticsObj => {
		if (!statisticsObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Current week does not have any statistics"
		});

		return res.status(200).send(statisticsObj);
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /monthly
 * Gets statistics from the last three months (if existing)
 * 
 * @returns A JSON object containing all weekly statistics of the last three months
 */
router.get("/monthly", (req, res) => {
	const { Statistic } = req.models;

	Statistic.findAll({
		attributes: {
			exclude: ["id", "createdAt"]
		},
		where: {
			createdAt: {
				[Sequelize.Op.gte]: (() => {
					let date = new Date(new Date().toDateString());
					date.setMonth(date.getMonth() - 2);
					return date;
				})()
			}
		},
		order: [
			["year", "ASC"],
			["month", "ASC"],
			["week", "ASC"]
		],
	}).then(statistics => {
		if (!statistics || !statistics.length) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Could not find any statistics for the last 3 months"
		});

		const statisticsObj = {
			weeks: statistics,
			total: totalStatisticValues(statistics)
		}

		return res.status(200).send(statisticsObj);
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /yearly
 * Gets statistics from the last two years (if existing)
 * 
 * @returns A JSON object containing all weekly statistics of the last two years
 */
router.get("/yearly", (req, res) => {
	const { Statistic } = req.models;

	Statistic.findAll({
		attributes: {
			exclude: ["id", "createdAt"]
		},
		where: {
			year: {
				[Sequelize.Op.gte]: new Date().getFullYear() - 1
			}
		},
		order: [
			["year", "ASC"],
			["month", "ASC"],
			["week", "ASC"]
		],
	}).then(statistics => {
		if (!statistics || !statistics.length) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Could not find any statistics for the last 2 years"
		});

		const statisticsObj = {
			weeks: statistics,
			total: totalStatisticValues(statistics)
		}

		return res.status(200).send(statisticsObj);
	}).catch(error => errorHandler(req, res, error));
});



/**
 * PUT /:countType
 * Pushes the download count/review count/count of created accounts/login count of the current week
 * 
 * @returns A message indicating success
 */
router.put("/:countType", (req, res) => {
	if (!req.params.countType.match(/^(download|review|accountCreation|packageUpload|versionUpload)$/)) return res.status(400).send({
		name: "Bad Request",
		code: 400,
		message: "Invalid statistics type"
	});
	const { Statistic } = req.models;

	Statistic.findOrCreate({
		where: {
			year: new Date().getFullYear(),
			month: new Date().getMonth(),
			week: currentWeek()
		},
		defaults: {
			id: crypto.SHA256(String(new Date().getTime())).toString(crypto.enc.Hex).substr(0, 32)
		}
	}).spread(statisticsObj => {
		statisticsObj.update({
			[`${req.params.countType}s`]: ++statisticsObj[`${req.params.countType}s`]
		}).then(() => {
			return res.status(200).send({
				name: "OK",
				code: 200
			});
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});

module.exports = router;