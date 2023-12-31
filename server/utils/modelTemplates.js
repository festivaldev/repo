module.exports = (req, res, next) => {
	const { PackageVersion, PackageFile, PackageVersionReview, PackageVersionReviewMessage, PackageVersionRating, Device } = req.models;
	
	const PackageReviewMessages = {
		model: PackageVersionReviewMessage,
		as: "messages",
		separate: true,
		order: [["createdAt", "ASC"]]
	}
	
	const PackageReviewRating = {
		model: PackageVersionRating,
		as: "rating"
	}
	
	const PackageReviewDevice = {
		model: Device,
		attributes: {
			exclude: ["id", "udid", "variant", "capacity"]
		},
		as: "device"
	}
	
	const PackageReviews = {
		model: PackageVersionReview,
		as: "recentReviews",
		separate: true,
		attributes: {
			exclude: ["deviceId"]
		},
		order: [["createdAt", "DESC"]],
		include: [Object.assign({}, PackageReviewMessages), Object.assign({}, PackageReviewRating), Object.assign({}, PackageReviewDevice)]
	}
	
	
	
	const PackageFileModel = {
		model: PackageFile,
		as: "raw",
		attributes: { exclude: ["updatedAt", "createdAt"] }
	}
	
	const PackageVersions = {
		model: PackageVersion,
		as: "versions",
		where: JSON.parse(JSON.stringify({
			visible: req.developer != null ? undefined : true
		})),
		include: [Object.assign({}, PackageFileModel), Object.assign({}, PackageReviews)]
	}
	
	const PackageLatestVersion = {
		model: PackageVersion,
		as: "latestVersion",
		where: JSON.parse(JSON.stringify({
			visible: req.developer != null ? undefined : true
		})),
		include: [Object.assign({}, PackageFileModel), Object.assign({}, PackageReviews)]
	}
	
	
	
	req.modelTemplates = {
		PackageFileModel: PackageFileModel,
		PackageReviews: PackageReviews,
		PackageReviewMessages: PackageReviewMessages,
		PackageReviewRating: PackageReviewRating,
		PackageReviewDevice: PackageReviewDevice,
		PackageVersions: PackageVersions,
		PackageLatestVersion: PackageLatestVersion
	}
	
	return next();
}