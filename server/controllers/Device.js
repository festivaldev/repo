const express = require("express");
const router = express.Router();
const errorHandler = require(`${__dirname}/../utils/errorHandler`);

const bodyparser = require("body-parser");
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

/**
 * GET /
 * Gets all devices linked to the current user
 * 
 * @returns A JSON array containing every device linked to the current user
 */
router.get("/", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	
	const { Device } = req.models;
	
	Device.findAll({
		where: {
			accountId: account.id
		}
	}).then(devices => {
		if (!devices || !devices.length) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "This account does not have any devices associated"
		});
		return res.status(200).send(devices);
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /:deviceId
 * Gets all details of a linked device associated to the current user
 * 
 * @returns A JSON dictionary representing a certain device linked to the current user
 */
router.get("/:deviceId", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	
	const { Device } = req.models;
	
	Device.findOne({
		where: {
			id: req.params.deviceId,
			accountId: account.id
		}
	}).then(deviceObj => {
		if (!deviceObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: `This account does not have any device with id ${req.params.deviceId} associated`
		});
		
		return res.status(200).send(deviceObj);
	}).catch(error => errorHandler(req, res, error));
});



/**
 * PUT /:deviceId
 * Updates information of a device (firmware, color, capacity etc)
 * 
 * @returns A JSON representation of the updated device
 */
router.put("/:deviceId", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	
	const { Device } = req.models;
	
	Device.findOne({
		where: {
			id: req.params.deviceId,
			accountId: account.id
		}
	}).then(deviceObj => {
		if (!deviceObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: `This account does not have any device with id ${req.params.deviceId} associated`
		});
		
		deviceObj.update(req.body).then(deviceObj => {
			return res.status(200).send(deviceObj);
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * DELETE /:deviceId
 * Deletes a device from a user profile and every review associated with it
 * 
 * @returns A message indicating success
 */
router.delete("/:deviceId", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	
	const { Device } = req.models;
	
	Device.findOne({
		where: {
			id: req.params.deviceId,
			accountId: account.id
		}
	}).then(deviceObj => {
		if (!deviceObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: `This account does not have any device with id ${req.params.deviceId} associated`
		});
		
		deviceObj.destroy().then(() => {
			return res.status(200).send({
				name: "OK",
				code: 200
			});
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});

module.exports = router;