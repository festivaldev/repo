const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const crypto = require("crypto-js");
const request = require("axios");

const UserRole = require(`${__dirname}/../../UserRole`);
const errorHandler = require(`${__dirname}/../../utils/errorHandler`);
const { SERVER_PORT } = process.env;

/**
 * GET /reviews
 * Gets all reviews stored in the database
 * 
 * @returns A JSON array containig every review stored in the database
 */
router.get("/reviews", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	
	const { Package, PackageVersionReview } = req.models;
	const { PackageReviewMessages, PackageReviewRating, PackageReviewDevice } = req.modelTemplates;
	
	PackageVersionReview.findAll({
		attributes: {
			exclude: ["deviceId"]
		},
		order: [["createdAt", "DESC"]],
		include: [PackageReviewMessages, PackageReviewRating, PackageReviewDevice]
	}).then(async reviews => {
		if (!reviews || !reviews.length) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Could not find any reviews"
		});

		let reviewData = reviews;
		if (req.account.role < UserRole.DEVELOPER) {
			reviewData = res.status(200).send(reviews.filter(_ => _.accountId == req.account.id));
		} else if ((req.account.role & UserRole.DEVELOPER) == UserRole.DEVELOPER && req.account.role < UserRole.MODERATOR) {
			let packages = await Package.findAll({
				where: {
					accountId: req.account.id,
					visible: true
				}
			});
			
			reviewData = reviews.filter(reviewObj => {
				return reviewObj.accountId == req.account.id || packages.map(_ => _.dataValues.id).includes(reviewObj.packageId)
			});
		}
		
		if (!reviewData || !reviewData.length) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Could not find any reviews"
		});
		
		return res.status(200).send(reviewData);
		
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /:packageId/reviews
 * Gets all reviews associated to a specific package ID
 * 
 * @returns A JSON array containing every review associated to a package
 */
router.get("/:packageId/reviews", (req, res) => {
	const { Package, PackageVersionReview } = req.models;
	const { PackageReviewMessages, PackageReviewRating, PackageReviewDevice } = req.modelTemplates;
	
	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
			visible: true
		}
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not found",
			code: 404,
			message: "Package not found"
		});

		PackageVersionReview.findAll({
			where: {
				packageId: packageObj.id
			},
			attributes: {
				exclude: ["deviceId"]
			},
			order: [["createdAt", "DESC"]],
			include: [PackageReviewMessages, PackageReviewRating, PackageReviewDevice]
		}).then(reviews => {
			if (!reviews || !reviews.length) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: "Package does not have any reviews"
			});

			return res.status(200).send(reviews);
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /:packageId/versions/latest/reviews
 * Gets all reviews associated to the latest version of a package
 * 
 * @returns A JSON array containing every review associated to the latest version of a package
 */
router.get("/:packageId/versions/latest/reviews", (req, res) => {
	const { Package, PackageVersion, PackageVersionReview } = req.models;
	const { PackageLatestVersion, PackageReviewMessages, PackageReviewRating, PackageReviewDevice } = req.modelTemplates;
	
	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
			visible: true
		},
		order: [
			["createdAt", "DESC"],
			[{ model: PackageVersion, as: "latestVersion" }, "createdAt", "DESC"]
		],
		include: [PackageLatestVersion]
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not found",
			code: 404,
			message: "Package not found"
		});

		PackageVersionReview.findAll({
			where: {
				packageId: packageObj.id,
				packageVersionId: packageObj.latestVersion.id
			},
			attributes: {
				exclude: ["deviceId"]
			},
			order: [["createdAt", "DESC"]],
			include: [PackageReviewMessages, PackageReviewRating, PackageReviewDevice]
		}).then(reviews => {
			if (!reviews || !reviews.length) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: "Version does not have any reviews"
			});

			return res.status(200).send(reviews);
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});


/**
 * GET /:packageId/versions/:versionId/reviews
 * Gets all reviews associated to a specific version of a package
 * 
 * @returns A JSON array containing every review associated to the specified version of a package
 */
router.get("/:packageId/versions/:versionId/reviews", (req, res) => {
	const { Package, PackageVersion, PackageVersionReview } = req.models;
	const { PackageReviewMessages, PackageReviewRating, PackageReviewDevice } = req.modelTemplates;
	
	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
			visible: true
		}
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not found",
			code: 404,
			message: "Package not found"
		});
		PackageVersion.findOne({
			where: {
				[Sequelize.Op.or]: {
					id: req.params.versionId,
					version: req.params.versionId
				}
			}
		}).then(versionObj => {
			if (!versionObj) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: `Package does not have any versions with identifier ${req.params.versionId}`
			});
			
			PackageVersionReview.findAll({
				where: {
					packageId: packageObj.id,
					packageVersionId: versionObj.id
				},
				attributes: {
					exclude: ["deviceId"]
				},
				order: [["createdAt", "DESC"]],
				include: [PackageReviewMessages, PackageReviewRating, PackageReviewDevice]
			}).then(reviews => {
				if (!reviews || !reviews.length) return res.status(404).send({
					name: "Not Found",
					code: 404,
					message: "Version does not have any reviews"
				});

				return res.status(200).send(reviews);
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * POST /:packageId/reviews/add
 * Creates a new packageVersionReview and packageVersionRating object and associates it to the ID of the latest package version
 * 
 * @returns A JSON object representing the created review
 */
router.post("/:packageId/reviews/add", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});

	const { Package, PackageVersion, PackageVersionReview, PackageVersionReviewMessage, PackageVersionRating } = req.models;
	const { PackageLatestVersion } = req.modelTemplates;
	const reviewData = req.body;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
			visible: true
		},
		order: [
			["createdAt", "DESC"],
			[{ model: PackageVersion, as: "latestVersion" }, "createdAt", "DESC"]
		],
		include: [PackageLatestVersion]
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not found",
			code: 404,
			message: "Package not found"
		});
		if (packageObj.accountId == account.id) return res.status(403).send({
			name: "Forbidden",
			code: 403,
			message: "Package developers cannot add a review to their own package"
		});

		PackageVersionReview.findOne({
			where: {
				accountId: account.id
			}
		}).then(reviewObj => {
			if (reviewObj) return res.status(403).send({
				name: "Forbidden",
				code: 403,
				message: "User did already review this package"
			});

			PackageVersionReview.create({
				id: String.prototype.concat(packageObj.id, packageObj.latestVersion.id, new Date().getTime()),
				packageId: packageObj.id,
				packageVersionId: packageObj.latestVersion.id,
				title: reviewData.title,
				accountId: account.id,
				deviceId: reviewData.deviceId
			}).then(async reviewObj => {
				PackageVersionReviewMessage.create({
					id: String.prototype.concat(packageObj.id, packageObj.latestVersion.id, reviewObj.id, new Date().getTime()),
					packageId: packageObj.id,
					packageVersionId: packageObj.latestVersion.id,
					packageVersionReviewId: reviewObj.id,
					text: reviewData.text,
					fromDeveloper: account.id == packageObj.accountId,
					accountId: account.id
				});

				PackageVersionRating.create({
					id: String.prototype.concat(packageObj.id, packageObj.latestVersion.id, reviewObj.id, new Date().getTime()),
					packageId: packageObj.id,
					packageVersionId: packageObj.latestVersion.id,
					packageVersionReviewId: reviewObj.id,
					value: reviewData.ratingValue,
					accountId: account.id
				});

				await request.put(`http://localhost:${SERVER_PORT}/api/statistics/review`);

				return res.status(200).send(reviewObj);
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /:packageId/reviews/:reviewId
 * Gets a specific review associated to a specific package
 * 
 * @returns A JSON object representing the specified review
 */
router.get("/:packageId/reviews/:reviewId", (req, res) => {
	const { Package, PackageVersionReview } = req.models;
	const { PackageReviewMessages, PackageReviewRating, PackageReviewDevice } = req.modelTemplates;

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
			name: "Not found",
			code: 404,
			message: "Package not found"
		});

		PackageVersionReview.findOne({
			where: {
				id: req.params.reviewId,
				packageId: packageObj.id,
			},
			attributes: {
				exclude: ["deviceId"]
			},
			include: [PackageReviewMessages, PackageReviewRating, PackageReviewDevice]
		}).then(reviewObj => {
			if (!reviewObj) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: `Package does not have any review with ID ${req.params.reviewId}`
			});

			return res.status(200).send(reviewObj);
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /:packageId/versions/:versionId/reviews/:reviewId
 * Gets a specific review associated to a specific package and version
 * 
 * @returns A JSON object representing the specified review
 */
router.get("/:packageId/versions/:versionId/reviews/:reviewId", (req, res) => {
	const { Package, PackageVersion, PackageVersionReview } = req.models;
	const { PackageReviewMessages, PackageReviewRating, PackageReviewDevice } = req.modelTemplates;

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
			name: "Not found",
			code: 404,
			message: "Package not found"
		});

		PackageVersion.findOne({
			where: {
				[Sequelize.Op.or]: {
					id: req.params.versionId,
					version: req.params.versionId
				}
			}
		}).then(versionObj => {
			if (!versionObj) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: `Package does not have any versions with identifier ${req.params.versionId}`
			});
			PackageVersionReview.findOne({
				where: {
					id: req.params.reviewId,
					packageId: packageObj.id,
					packageVersionId: versionObj.id
				},
				attributes: {
					exclude: ["deviceId"]
				},
				include: [PackageReviewMessages, PackageReviewRating, PackageReviewDevice]
			}).then(reviewObj => {
				if (!reviewObj) return res.status(404).send({
					name: "Not Found",
					code: 404,
					message: `Version does not have any review with ID ${req.params.reviewId}`
				});

				return res.status(200).send(reviewObj);
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * POST /:packageId/reviews/:reviewId/addMessage
 * Adds a new message to a review
 * 
 * @returns A JSON object representing the created message
 */
router.post("/:packageId/reviews/:reviewId/addMessage", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});

	const { Package, PackageVersion, PackageVersionReview, PackageVersionReviewMessage } = req.models;
	const { PackageLatestVersion } = req.modelTemplates;
	const reviewData = req.body;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
			visible: true
		},
		order: [
			["createdAt", "DESC"],
			[{ model: PackageVersion, as: "latestVersion" }, "createdAt", "DESC"]
		],
		include: [PackageLatestVersion]
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not found",
			code: 404,
			message: "Package not found"
		});

		PackageVersionReview.findOne({
			where: {
				id: req.params.reviewId,
				packageId: packageObj.id,
			}
		}).then(reviewObj => {
			if (!reviewObj) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: `Package does not have any review with ID ${req.params.reviewId}`
			});
			if (account.id != reviewObj.accountId &&
				account.id != packageObj.id) {
				return res.status(401).send({
					name: "Unauthorized",
					code: 401,
					message: "You are not allowed to perform this action"
				});
			}

			PackageVersionReviewMessage.create({
				id: String.prototype.concat(packageObj.id, packageObj.latestVersion.id, reviewObj.id, new Date().getTime()),
				packageId: packageObj.id,
				packageVersionId: reviewObj.packageVersionId,
				packageVersionReviewId: reviewObj.id,
				text: reviewData.text,
				fromDeveloper: account.id == packageObj.accountId,
				accountId: account.id
			}).then(messageObj => {
				return res.status(200).send(messageObj);
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * PUT /:packageId/reviews/:reviewId/:messageId
 * Updates a review message;
 * 
 * @returns A JSON object representing the updated review message
 */
router.put("/:packageId/reviews/:reviewId/:messageId", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});

	const { Package, PackageVersionReview, PackageVersionReviewMessage } = req.models;
	const reviewData = req.body;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
			visible: true
		}
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not found",
			code: 404,
			message: "Package not found"
		});

		PackageVersionReview.findOne({
			where: {
				id: req.params.reviewId,
				packageId: packageObj.id,
			}
		}).then(reviewObj => {
			if (!reviewObj) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: `Package does not have any review with ID ${req.params.reviewId}`
			});

			PackageVersionReviewMessage.findOne({
				where: {
					id: req.params.messageId,
					packageId: packageObj.id,
					packageVersionReviewId: reviewObj.id
				}
			}).then(messageObj => {
				if (!messageObj) return res.status(404).send({
					name: "Not Found",
					code: 404,
					message: `Review does not have any message with ID ${req.params.messageId}`
				});

				if (account.id != messageObj.accountId) return res.status(401).send({
					name: "Unauthorized",
					code: 401,
					message: "You are not allowed to perform this action"
				});

				messageObj.update({
					text: reviewData.text
				}).then(messageObj => {
					return res.status(200).send(messageObj);
				}).catch(error => errorHandler(req, res, error));
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * DELETE /:packageId/reviews/:reviewId
 * Deletes a review
 * 
 * @return A message indicating success
 */
router.delete("/:packageId/reviews/:reviewId", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});

	const { Package, PackageVersionReview } = req.models;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
			visible: true
		}
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not found",
			code: 404,
			message: "Package not found"
		});

		PackageVersionReview.findOne({
			where: {
				id: req.params.reviewId,
				packageId: packageObj.id,
			}
		}).then(reviewObj => {
			if (account.id != packageObj.id &&	// Developer
				account.id != reviewObj.id &&	// Review Author
				(account.role & UserRole.MODERATOR) == UserRole.MODERATOR) {
				return res.status(401).send({
					name: "Unauthorized",
					code: 401,
					message: "You are not allowed to perform this action"
				});
			}

			reviewObj.destroy().then(() => {
				return res.status(200).send({
					name: "OK",
					code: 200
				});
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * DELETE /:packageId/reviews/:reviewId/:messageId
 * Deletes a specific review message
 * 
 * @returns A message indicating success
 * @note Single message reviews will get deleted if the message is deleted
 * @note Deleting the first message of a review will delete the review
 */
router.delete("/:packageId/reviews/:reviewId/:messageId", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});

	const { Package, PackageVersionReview, PackageVersionReviewMessage } = req.models;
	const { PackageReviewMessages } = req.modelTemplates;

	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
			visible: true
		}
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not found",
			code: 404,
			message: "Package not found"
		});

		PackageVersionReview.findOne({
			where: {
				id: req.params.reviewId,
				packageId: packageObj.id,
			},
			include: [PackageReviewMessages]
		}).then(reviewObj => {
			if (account.id != packageObj.id &&	// Developer
				account.id != reviewObj.id &&	// Review Author
				(account.role & UserRole.MODERATOR) == UserRole.MODERATOR) {
				return res.status(401).send({
					name: "Unauthorized",
					code: 401,
					message: "You are not allowed to perform this action"
				});
			}

			PackageVersionReviewMessage.findOne({
				where: {
					id: req.params.messageId,
					packageId: packageObj.id,
					packageVersionReviewId: reviewObj.id
				}
			}).then(messageObj => {
				if (!messageObj) return res.status(404).send({
					name: "Not Found",
					code: 404,
					message: `Review does not have any message with ID ${req.params.messageId}`
				});

				if (messageObj.id == reviewObj.messages[0].id ||
					reviewObj.messages.length == 1) {
					reviewObj.destroy();
				} else {
					messageObj.destroy();
				}

				return res.status(200).send({
					name: "OK",
					code: 200
				});
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});

module.exports = router;