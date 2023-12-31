const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");

const errorHandler = require(`${__dirname}/../../utils/errorHandler`);

const emptyRatingsObject =() => {
	let _ratings = {
		ratings: (() => {
			let _ratingContainer = [];
			for (var i = 5; i > 0; i--) {
				_ratingContainer.push({
					stars: i,
					count: 0
				});
			}
			return _ratingContainer;
		})(),
		average: 0,
		total: 0
	}
	
	return _ratings;
}

const getRatings = (_ratings, reviews) => {
	reviews.forEach(review => {
		switch (review.rating.value) {
			case 5: _ratings.ratings[0].count += 1; break;
			case 4: _ratings.ratings[1].count += 1; break;
			case 3: _ratings.ratings[2].count += 1; break;
			case 2: _ratings.ratings[3].count += 1; break;
			case 1: _ratings.ratings[4].count += 1; break;
		}
		
		_ratings.total += 1;
	});

	_ratings.average = 0;
	_ratings.ratings.forEach(rating => {
		_ratings.average += (rating.stars * rating.count);
	});
	
	if (_ratings.total >= 1) {
		_ratings.average = _ratings.average / _ratings.total;
	}
	
	return _ratings;
}

/**
 * GET /:packageId/ratings
 * Gets all ratings for a specific package ID
 * 
 * @returns A JSON object with the total values of every rating associated with the specified package
 */
router.get("/:packageId/ratings", (req, res) => {
	const { Package, } = req.models;
	const { PackageVersions } = req.modelTemplates;
	
	Package.findOne({
		where: {
			[Sequelize.Op.or]: {
				id: req.params.packageId,
				identifier: req.params.packageId
			},
			visible: true
		},
		include: [PackageVersions]
	}).then(packageObj => {
		if (!packageObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "Package not found"
		});
		
		let ratings = emptyRatingsObject();
		
		packageObj.versions.forEach(version => {
			ratings = getRatings(ratings, version.recentReviews);
		});
		
		res.status(200).send(ratings);
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /:packageId/versions/latest/ratings
 * Gets all ratings for the latest version associated to a package ID
 * 
 * @returns A JSON object with the total values of every rating associated with the latest package version
 */
router.get("/:packageId/versions/latest/ratings", (req, res) => {
	const { Package, PackageVersion } = req.models;
	const { PackageReviews } = req.modelTemplates;
	
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
			include: [PackageReviews]
		}).then(versionObj => {
			if (!versionObj) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: "Package does not have any versions"
			});

			let ratings = getRatings(emptyRatingsObject(), versionObj.recentReviews)
			res.status(200).send(ratings);
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /:packageId/versions/:versionId/ratings
 * Gets all ratings for a specific version ID associated to a package ID
 * 
 * @returns A JSON object with the total values of every rating associated with a specific package version
 */
router.get("/:packageId/versions/:versionId/ratings", (req, res) => {
	const { Package, PackageVersion } = req.models;
	const { PackageReviews } = req.modelTemplates;
	
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
			name: "Not Found",
			code: 404,
			message: "Package not found"
		});
		
		PackageVersion.findOne({
			where: {
				[Sequelize.Op.or]: {
					id: req.params.versionId,
					version: req.params.versionId
				},
				packageId: packageObj.id,
				visible: true
			},
			include: [PackageReviews]
		}).then(versionObj => {
			if (!versionObj) return res.status(404).send({
				name: "Not Found",
				code: 404,
				message: "Package does not have any versions"
			});

			let ratings = getRatings(emptyRatingsObject(), versionObj.recentReviews)
			res.status(200).send(ratings);
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /:packageId/reviews/:reviewId/rating
 * Gets the rating object for a specific review ID associated to a package ID
 * 
 * @returns The rating object for a specific review ID associated to a package ID
 */
router.get("/:packageId/reviews/:reviewId/rating", (req, res) => {
	const { Package, PackageVersionReview, PackageVersionRating } = req.models;
	
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
			name: "Not Found",
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
			
			PackageVersionRating.findOne({
				where: {
					packageId: packageObj.id,
					packageVersionReviewId: reviewObj.id
				}
			}).then(ratingObj => {
				if (!ratingObj) return res.status(404).send({
					name: "Not Found",
					code: 404,
					message: `Package does not have any rating with ID ${req.params.ratingId}`
				});
				
				return res.status(200).send(ratingObj);
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * PUT /:packageId/reviews/:reviewId/rating
 * Updates the rating value for a specific review ID associated to a package ID
 * 
 * @returns The updated rating object
 */
router.put("/:packageId/reviews/:reviewId/rating", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	
	const { Package, PackageVersionReview, PackageVersionRating } = req.models;
	
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
			name: "Not Found",
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
			if (account.id != reviewObj.accountId) return res.status(401).send({
				name: "Unauthorized",
				code: 401,
				message: "You are not allowed to perform this action"
			});
			
			PackageVersionRating.findOne({
				where: {
					packageId: packageObj.id,
					packageVersionReviewId: reviewObj.id
				}
			}).then(ratingObj => {
				if (!ratingObj) return res.status(404).send({
					name: "Not Found",
					code: 404,
					message: `Package does not have any rating with ID ${req.params.ratingId}`
				});
				
				ratingObj.update({
					value: req.body.value
				}).then(ratingObj => {
					return res.status(200).send(ratingObj);	
				}).catch(error => errorHandler(req, res, error));
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});

module.exports = router;