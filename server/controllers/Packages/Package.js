const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const crypto = require("crypto-js");
const request = require("axios");
const fs = require("fs");

const { rawPackageInfo, rawPackagesInfo } = require(`${__dirname}/../../utils/rawPackage`);
const errorHandler = require(`${__dirname}/../../utils/errorHandler`);
const UserRole = require(`${__dirname}/../../UserRole`);
const { SERVER_PORT } = process.env;

let asyncForEach = async (array, callback) => {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index)
	}
}

/**
 * GET /
 * Gets all packages, including latest version, ratings and reviews
 * 
 * @returns A JSON array containing every public package available
 */
router.get("/", (req, res) => {
	const { Package, PackageVersion } = req.models;
	const { PackageReviews, PackageLatestVersion } = req.modelTemplates;

	Package.findAll({
		where: JSON.parse(JSON.stringify({
			visible: req.developer != null ? undefined : true
		})),
		order: [
			["createdAt", "DESC"],
			[{ model: PackageVersion, as: "latestVersion" }, "createdAt", "ASC"] // ASC, but why?
		],
		include: [PackageReviews, PackageLatestVersion],
	}).then(async packages => {
		if (!packages || !packages.length) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "No packages found"
		});
		
		await asyncForEach(packages, async packageObj => {
			await PackageVersion.findAll({
				where: JSON.parse(JSON.stringify({
					packageId: packageObj.id,
					visible: req.developer != null ? undefined : true
				})),
				order: [["createdAt", "DESC"]]
			}).then(versions => {
				packageObj.dataValues.downloadCount = versions.map(_ => _.downloadCount).reduce((a, b) => a + b);
			});
		});

		return res.status(200).send(rawPackagesInfo(JSON.parse(JSON.stringify(packages))));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * POST /add
 * Adds a new package and creates new packageVersion object
 * 
 * @returns A JSON object representation of the newly created package
 */
router.post("/add", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if ((req.account.role & UserRole.DEVELOPER) != UserRole.DEVELOPER) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});

	const { Package, PackageVersion } = req.models;
	const packageData = req.body;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				identifier: packageData.identifier,
				name: packageData.name
			}
		}
	}).then(packageObj => {
		if (packageObj) return res.status(409).send({
			name: "Conflict",
			code: 409,
			message: "Package name or bundle identifier are already in use"
		});

		Package.create({
			id: String.prototype.concat(packageData.name, packageData.identifier, new Date().getTime()),
			name: packageData.name,
			identifier: packageData.identifier,
			shortDescription: packageData.shortDescription,
			detailedDescription: packageData.detailedDescription,
			minOSVersion: packageData.minOSVersion,
			maxOSVersion: packageData.maxOSVersion,
			accountId: account.id,
			visible: packageData.visible,
			icon: packageData.icon,
			screenshots: packageData.screenshots,
			bugsReportURL: packageData.bugsReportURL
		}).then(packageObj => {
			if (!packageObj) return res.status(500).send({
				name: "Internal Server Error",
				code: 500,
				message: error.message
			});

			PackageVersion.create({
				id: String.prototype.concat(packageObj.id, packageObj.name, packageObj.identifier, new Date().getTime()),
				packageId: packageObj.id,
				version: packageData.releaseVersion,
				changeText: packageData.releaseDescription,
				visible: true
			}).then(async versionObj => {
				if (!versionObj) return res.status(500).send({
					name: "Internal Server Error",
					code: 500,
					message: error.message
				});

				await request.put(`http://localhost:${SERVER_PORT}/api/statistics/packageUpload`);

				return res.status(200).send({
					package: packageObj,
					version: versionObj
				});
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /:packageId
 * Gets a specific package by its ID, including latest version, ratings and reviews
 * 
 * @returns A JSON object representation of the specified package
 */
router.get("/:packageId", (req, res) => {
	const { Package, PackageVersion } = req.models;
	const { PackageReviews, PackageLatestVersion } = req.modelTemplates;

	Package.findOne({
		where: Object.assign(JSON.parse(JSON.stringify({
			visible: req.developer != null ? undefined : true
		})), {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
		}),
		order: [
			["createdAt", "DESC"],
			[{ model: PackageVersion, as: "latestVersion" }, "createdAt", "DESC"]
		],
		include: [PackageReviews, PackageLatestVersion],
	}).then(async packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Package not found"
		});
		
		await PackageVersion.findAll({
			where: JSON.parse(JSON.stringify({
				packageId: packageObj.id,
				visible: req.developer != null ? undefined : true
			})),
			order: [["createdAt", "DESC"]]
		}).then(versions => {
			packageObj.dataValues.downloadCount = versions.map(_ => _.downloadCount).reduce((a, b) => a + b);
		});

		return res.status(200).send(rawPackageInfo(JSON.parse(JSON.stringify(packageObj))));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * PUT /:packageId
 * Updates a specific package by its ID with the data contained in the body
 * 
 * @returns A JSON object representation of the updated package
 */
router.put("/:packageId", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if ((account.role & UserRole.DEVELOPER) != UserRole.DEVELOPER) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});

	const { Package } = req.models;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			}
		}
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Package not found"
		});
		if (packageObj.accountId != account.id) return res.status(401).send({
			name: "Unauthorized",
			code: 401,
			message: "You are not allowed to perform this action"
		});

		packageObj.update(Object.assign(req.body, {
			id: packageObj.id,
			identifier: packageObj.identifier,
			accountId: packageObj.accountId,
			createdAt: packageObj.createdAt,
			updatedAt: packageObj.updatedAt
		})).then(packageObj => {
			return res.status(200).send(packageObj);
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * DELETE /:packageId
 * Deletes a specific package by its ID and everything associated with it
 * 
 * @returns A message indicating success
 */
router.delete("/:packageId", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if (account.role < UserRole.DEVELOPER) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});

	const { Package } = req.models;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			}
		}
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Package not found"
		});
		if (((account.role & UserRole.DEVELOPER) == UserRole.DEVELOPER &&
			(account.role & UserRole.MODERATOR) == 0 &&
			(account.role & UserRole.ADMINISTRATOR) == 0) &&
			packageObj.accountId != account.id) {
			return res.status(401).send({
				name: "Unauthorized",
				code: 401,
				message: "You are not allowed to perform this action"
			});
		}

		packageObj.destroy().then(() => {
			if (fs.existsSync(`${__dirname}/../../../resources/icons/${packageObj.id}.png`)) {
				fs.unlinkSync(`${__dirname}/../../../resources/icons/${packageObj.id}.png`);
			}

			return res.status(200).send({
				name: "OK",
				code: 200
			});
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * POST /:packageId/icon
 * Endpoint for uploading a package icon
 * 
 * @returns A message indicating success
 */
router.post("/:packageId/icon", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if ((account.role & UserRole.DEVELOPER) != UserRole.DEVELOPER) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});

	const { Package } = req.models;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			}
		}
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Package not found"
		});
		if (packageObj.accountId != account.id) return res.status(401).send({
			name: "Unauthorized",
			code: 401,
			message: "You are not allowed to perform this action"
		});

		let packageIcon = req.files.file;

		if (fs.existsSync(`${__dirname}/../../../resources/icons/${packageObj.id}.png`)) {
			fs.unlinkSync(`${__dirname}/../../../resources/icons/${packageObj.id}.png`);
		}
		packageIcon.mv(`${__dirname}/../../../resources/icons/${packageObj.id}.png`);

		packageObj.update({
			icon: `${packageObj.id}.png`
		}).then(packageObj => {
			return res.status(200).send({
				name: "OK",
				code: 200
			});
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * POST /:packageId/screenshot
 * Endpoint for uploading package screenshots
 * 
 * @returns A message indicating success
 */
router.post("/:packageId/screenshot", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if ((account.role & UserRole.DEVELOPER) != UserRole.DEVELOPER) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});

	const { Package } = req.models;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			}
		}
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Package not found"
		});
		if (packageObj.accountId != account.id) return res.status(401).send({
			name: "Unauthorized",
			code: 401,
			message: "You are not allowed to perform this action"
		});

		let packageScreenshot = req.files.file;

		if (fs.existsSync(`${__dirname}/../../../resources/screenshots/${req.body.fileName}`)) {
			fs.unlinkSync(`${__dirname}/../../../resources/screenshots/${req.body.fileName}`);
		}
		packageScreenshot.mv(`${__dirname}/../../../resources/screenshots/${req.body.fileName}`);
		return res.status(200).send({
			name: "OK",
			code: 200
		});
	}).catch(error => errorHandler(req, res, error));
});



/**
 * DELETE /:packageId/screenshot/:fileName
 * Deletes a package screenshot by its filename
 * 
 * @returns A message indicating success
 */
router.delete("/:packageId/screenshot/:fileName", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if ((account.role & UserRole.DEVELOPER) != UserRole.DEVELOPER) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});

	const { Package } = req.models;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			}
		}
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Package not found"
		});
		if (packageObj.accountId != account.id) return res.status(401).send({
			name: "Unauthorized",
			code: 401,
			message: "You are not allowed to perform this action"
		});

		if (fs.existsSync(`${__dirname}/../../../resources/screenshots/${req.params.fileName}`)) {
			fs.unlinkSync(`${__dirname}/../../../resources/screenshots/${req.params.fileName}`);
			return res.status(200).send({
				name: "OK",
				code: 200
			});
		}

		return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Screenshot file not found"
		});
	}).catch(error => errorHandler(req, res, error));
});

module.exports = router;