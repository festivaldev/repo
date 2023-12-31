const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const crypto = require("crypto-js");
const cryptoBuiltin = require("crypto");
const request = require("axios");
const fs = require("fs");

const ar = require("ar");
const tar = require("tar-stream");
const bufferstream = require("simple-bufferstream");
const gunzip = require("gunzip-maybe");
const controlParser = require("debian-control-parser");

const bodyparser = require("body-parser");
const fileupload = require("express-fileupload");
const { rawPackageInfo, rawPackagesInfo } = require(`${__dirname}/../../utils/rawPackage`);
const userRole = require(`${__dirname}/../../UserRole`);
const errorHandler = require(`${__dirname}/../../utils/errorHandler`);
const { SERVER_PORT } = process.env;



/**
 * GET /:packageId/versions
 * Gets all versions associated to a specific package ID
 * 
 * @returns A JSON array containing every version associated to a package
 */
router.get("/:packageId/versions", (req, res) => {
	const { Package, PackageVersion } = req.models;
	const { PackageFileModel, PackageReviews, } = req.modelTemplates;

	Package.findOne({
		where: Object.assign(JSON.parse(JSON.stringify({
			visible: req.developer != null ? undefined : true
		})), {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
		})
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Package not found"
		});

		PackageVersion.findAll({
			where: JSON.parse(JSON.stringify({
				packageId: packageObj.id,
				visible: req.developer != null ? undefined: true
			})),
			order: [["createdAt", "DESC"]],
			include: [Object.assign({}, PackageFileModel), PackageReviews]
		}).then(versions => {
			if (!versions || !versions.length) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: "Package does not have any versions"
			});

			return res.status(200).send(versions);
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /:packageId/versions/latest
 * Gets all versions associated to a specific package ID
 * 
 * @returns A JSON array containing every version associated to a package
 */
router.get("/:packageId/versions/latest", (req, res) => {
	const { Package, PackageVersion } = req.models;
	const { PackageFileModel, PackageReviews } = req.modelTemplates;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
			visible: true
		},
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Package not found"
		});

		PackageVersion.findOne({
			where: {
				packageId: packageObj.id,
				visible: true
			},
			order: [["createdAt", "DESC"]],
			include: [PackageFileModel, PackageReviews]
		}).then(versionObj => {
			if (!versionObj) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: "Package does not have any versions"
			});

			return res.status(200).send(versionObj);
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * POST /:packageId/versions/add
 * Creates a new packageVersion object and associates it to the specified package ID
 * 
 * @returns A JSON object representing the created version
 */
router.post("/:packageId/versions/add", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if ((account.role & userRole.DEVELOPER) != userRole.DEVELOPER) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});

	const { Package, PackageVersion } = req.models;
	const versionData = req.body;

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

		PackageVersion.findOne({
			where: {
				packageId: packageObj.id,
				version: versionData.version
			}
		}).then(versionObj => {
			if (versionObj) return res.status(409).send({
				name: "Conflict",
				code: 409,
				message: `Package already has a version ${versionData.version}`
			});

			PackageVersion.create({
				id: String.prototype.concat(packageObj.id, packageObj.name, packageObj.identifier, new Date().getTime()),
				packageId: packageObj.id,
				version: versionData.version,
				changeText: versionData.changeText,
				visible: versionData.visible
			}).then(async versionObj => {
				if (!versionObj) return res.status(500).send({
					name: "Internal Server Error",
					code: 500,
					message: "Failed to create version object"
				});

				await request.put(`http://localhost:${SERVER_PORT}/api/statistics/versionUpload`);

				return res.status(200).send(versionObj);
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /:packageId/versions/:versionId
 * Gets a specific version by its ID associated to a specific package ID
 * 
 * @returns A JSON object representing the selected version
 */
router.get("/:packageId/versions/:versionId", (req, res) => {
	const { Package, PackageVersion } = req.models;
	const { PackageFileModel, PackageReviews } = req.modelTemplates;

	Package.findOne({
		where: Object.assign(JSON.parse(JSON.stringify({
			visible: req.developer != null ? undefined : true
		})), {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
		}),
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Package not found"
		});

		PackageVersion.findOne({
			where: Object.assign(JSON.parse(JSON.stringify({
				visible: req.developer != null ? undefined : true
			})), {
				[Sequelize.Op.or]: {
					id: req.params.versionId,
					version: req.params.versionId
				},
				packageId: packageObj.id
			}),
			order: [["createdAt", "DESC"]],
			include: [PackageFileModel, PackageReviews]
		}).then(versionObj => {
			if (!versionObj) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: `Package does not have any versions with identifier ${req.params.versionId}`
			});

			return res.status(200).send(versionObj);
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * PUT /:packageId/versions/:versionId
 * Updates a specific version by its ID with the data contained in the body
 * 
 * @returns A JSON object representing the updated version
 */
router.put("/:packageId/versions/:versionId", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if ((account.role & userRole.DEVELOPER) != userRole.DEVELOPER) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});

	const { Package, PackageVersion } = req.models;

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

		PackageVersion.findOne({
			where: {
				[Sequelize.Op.or]: {
					id: req.params.versionId,
					version: req.params.versionId
				},
				packageId: packageObj.id
			}
		}).then(versionObj => {
			if (!versionObj) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: `Package does not have any versions with identifier ${req.params.versionId}`
			});

			versionObj.update(Object.assign(req.body, {
				id: versionObj.id,
				packageId: versionObj.packageId,
				version: versionObj.version,
				downloadCount: versionObj.downloadCount,
				createdAt: versionObj.createdAt,
				updatedAt: versionObj.updatedAt
			})).then(versionObj => {
				return res.status(200).send(versionObj);
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * DELETE /:packageId/versions/:versionId
 * Deletes a specific version by its ID and everything associated with it
 * 
 * @returns A message indicating success
 */
router.delete("/:packageId/versions/:versionId", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if (account.role < userRole.DEVELOPER) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});

	const { Package, PackageVersion } = req.models;

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
		if (((account.role & userRole.DEVELOPER) == userRole.DEVELOPER &&
			(account.role & userRole.MODERATOR) == 0 &&
			(account.role & userRole.ADMINISTRATOR) == 0) &&
			packageObj.accountId != account.id) {
			return res.status(401).send({
				name: "Unauthorized",
				code: 401,
				message: "You are not allowed to perform this action"
			});
		}

		PackageVersion.findOne({
			where: {
				[Sequelize.Op.or]: {
					id: req.params.versionId,
					version: req.params.versionId
				},
				packageId: packageObj.id
			}
		}).then(versionObj => {
			if (!versionObj) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: `Package does not have any versions with identifier ${req.params.versionId}`
			});

			versionObj.destroy().then(() => {
				return res.status(200).send({
					name: "OK",
					code: 200
				});
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * POST /:packageId/versions/:versionId/file
 * Endpoint for uploading a package file
 * 
 * @returns A JSON object representing the created packageFile object
 */
router.post("/:packageId/versions/:versionId/file", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if ((account.role & userRole.DEVELOPER) != userRole.DEVELOPER) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});

	const { Package, PackageFile } = req.models;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			}
		}
	}).then(async packageObj => {
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

		let packageFile = req.files.file;
		let controlData = await new Promise((resolve, reject) => {
			try {
				let archive = new ar.Archive(packageFile.data);
				archive.getFiles().forEach(file => {
					let filename = file.name();

					if (filename.includes("control.tar.gz")) {
						let extractor = tar.extract();

						extractor.on("entry", (header, stream, next) => {
							if (header.name.indexOf("control") !== -1) {
								let controlFile = controlParser(stream);
								controlFile.on("stanza", parsedControl => {
									return resolve(parsedControl);
								});
							} else {
								next();
							}
						});

						bufferstream(file.fileData()).pipe(gunzip()).pipe(extractor);
					}
				});
			} catch (error) {
				console.log(error);
				return reject(error);
			}
		});

		if (!controlData) return res.status(404).send({
			name: "Bad Request",
			code: 400,
			message: "Package file does not contain any control file"
		});
		
		if (controlData["Package"] != packageObj.identifier) return res.status(409).send({
			name: "Conflict",
			code: 409,
			message: "File bundle identifier does not match package identifier"
		});

		PackageFile.findOrCreate({
			where: {
				packageId: packageObj.id,
				packageVersionId: req.params.versionId
			},
			defaults: {
				id: String.prototype.concat(packageObj.id, account.id, new Date().getTime()),
				package: controlData["Package"],
				name: controlData["Name"],
				version: controlData["Version"],
				architecture: controlData["Architecture"],
				author: controlData["Author"],
				maintainer: controlData["Maintainer"],
				depends: controlData["Depends"] ? JSON.stringify(controlData["Depends"].split(", ")) : "[]",
				conflicts: controlData["Conflicts"] ? JSON.stringify(controlData["Conflicts"].split(", ")) : "[]",
				filename: `./files/${packageFile.name}`,
				md5sum: cryptoBuiltin.createHash("md5").update(packageFile.data).digest("hex"),
				sha1: cryptoBuiltin.createHash("sha1").update(packageFile.data).digest("hex"),
				sha256: cryptoBuiltin.createHash("sha256").update(packageFile.data).digest("hex"),
				section: controlData["Section"],
				size: Math.floor(packageFile.data.length),
				installedSize: controlData["Installed-Size"]
			}
		}).spread(packageFileObj => {
			packageFileObj.update({
				maintainer: controlData["Maintainer"],
				depends: controlData["Depends"] ? JSON.stringify(controlData["Depends"].split(", ")) : "[]",
				conflicts: controlData["Conflicts"] ? JSON.stringify(controlData["Conflicts"].split(", ")) : "[]",
				filename: `./files/${packageFile.name}`,
				md5sum: cryptoBuiltin.createHash("md5").update(packageFile.data).digest("hex"),
				sha1: cryptoBuiltin.createHash("sha1").update(packageFile.data).digest("hex"),
				sha256: cryptoBuiltin.createHash("sha256").update(packageFile.data).digest("hex"),
				section: controlData["Section"],
				size: Math.floor(packageFile.data.length),
				installedSize: controlData["Installed-Size"]
			}).then(packageFileObj => {
				packageFile.mv(`${__dirname}/../../../files/${packageFile.name}`);
				return res.status(200).send(packageFileObj);
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});

module.exports = router;