const express = require("express");
const router = express.Router();
const fs = require("fs");

const bodyparser = require("body-parser");
const fileupload = require("express-fileupload");
const UserRole = require(`${__dirname}/../UserRole`);
const errorHandler = require(`${__dirname}/../utils/errorHandler`);

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());
router.use(fileupload());

/**
 * GET /me
 * Gets all details for the currently logged in user
 * 
 * @returns A JSON object containing personal account details
 */

router.get("/me", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	
	return res.status(200).json({
		id: account.id,
		username: account.username,
		email: account.email,
		role: account.role,
		profileImage: account.profileImage,
		lastLogin: account.lastLogin,
		active: account.active,
		devices: account.devices,
		createdAt: account.createdAt
	});
});



/**
 * GET /:userId
 * Gets all public details for a different user (username, profile image, last login)
 * 
 * @returns A JSON object containing all public account details of a certain user
 */
router.get("/:userId", (req, res) => {
	const { Account } = req.models;
	
	Account.findOne({
		where: {
			id: req.params.userId,
			active: true
		}
	}).then(accountObj => {
		if (!accountObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "User not found or account is inactive"
		});
		
		return res.status(200).json({
			id: accountObj.id,
			username: accountObj.username,
			role: accountObj.role,
			profileImage: accountObj.profileImage,
			createdAt: accountObj.createdAt
		});
	}).catch(error => errorHandler(req, res, error));
});



/**
 * PUT /me
 * Updates the currently logged in user profile with the data contained in the body
 * 
 * @returns A JSON representation of the updated user account
 */
router.put("/me", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	
	account.update(Object.assign(req.body, {
		id: account.id,
		role: account.role,
		lastLogin: account.lastLogin,
		active: account.active,
		createdAt: account.createdAt,
		updatedAt: account.updatedAt
	})).then(accountObj => {
		return res.status(200).json({
			id: accountObj.id,
			username: accountObj.username,
			email: accountObj.email,
			role: accountObj.role,
			profileImage: accountObj.profileImage,
			lastLogin: accountObj.lastLogin,
			active: accountObj.active,
			createdAt: accountObj.createdAt
		});
	}).catch(error => errorHandler(req, res, error));
});



/**
 * PUT /:userId
 * Updates a specified user with the data contained in the body
 * 
 * @returns A JSON representation of the updated user account
 */
router.put("/:userId", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if (account.id == req.params.userId) return res.status(403).send({
		name: "Forbidden",
		code: 403,
		message: "You cannot update your acount via PUT /:userId. Please check if you can update your account using UPDATE /me"
	});
	if ((account.role & UserRole.MODERATOR) != UserRole.MODERATOR) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});
	
	Account.findOne({
		where: {
			id: req.params.userId
		}
	}).then(accountObj => {
		if (!accountObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "User not found"
		});
		if (accountObj.role >= account.role || accountObj.role == 1) return res.status(401).send({
			name: "Unauthorized",
			code: 401,
			message: "You are not allowed to perform this action"
		});
		
		accountObj.update(Object.assign(req.body, {
			id: accountObj.id,
			lastLogin: accountObj.lastLogin,
			createdAt: accountObj.createdAt,
			updatedAt: accountObj.updatedAt
		})).then(() => {
			return res.status(200).json({
				id: accountObj.id,
				username: accountObj.username,
				email: accountObj.email,
				role: accountObj.role,
				profileImage: accountObj.profileImage,
				lastLogin: accountObj.lastLogin,
				active: accountObj.active,
				createdAt: accountObj.createdAt
			});
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * DELETE /me
 * Deletes the currently logged in user account only if no package is associated
 * 
 * @returns A message indicating success
 */
router.delete("/me", (req, res) => {
	const { account } = req;
	const { Package } = req.models;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	
	Package.findOne({
		where: {
			accountId: account.id
		}
	}).then(packageObj => {
		if (packageObj) return res.status(403).send({
			name: "Forbidden",
			code: 403,
			message: "One or more packages are associated to your account. You may request your deletion in the User CP."
		});
		
		if (account.profileImage && account.profileImage.length > 0) {
			fs.unlinkSync(`${__dirname}/../../resources/profileImages/${account.id}`);
		}
		
		account.destroy().then(() => {
			return res.status(200).send({
				name: "OK",
				code: 200
			});
		}).catch(error => errorHandler(req, res, error));
	});
});



/**
 * DELETE /:userId
 * Deletes a specific user and all associated data
 *
 * @returns A message indicating success
 * NOTE: User can only request deletion if one or more packages are associated to this user, otherwise delete it
 */
router.delete("/:userId", (req, res) => {
	const { account } = req;
	const { Account } = req.models;
	
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	if (account.id == req.params.userId) return res.status(403).send({
		name: "Forbidden",
		code: 403,
		message: "You cannot delete your acount via DELETE /:userId. Please check if you can delete your account using DELETE /me"
	});
	if ((account.role & UserRole.MODERATOR) != UserRole.MODERATOR) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "You are not allowed to perform this action"
	});
	
	Account.findOne({
		where: {
			id: req.params.userId
		}
	}).then(accountObj => {
		if (!accountObj) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "User not found"
		});
		if (accountObj.role >= account.role || accountObj.role == 1) return res.status(401).send({
			name: "Unauthorized",
			code: 401,
			message: "You are not allowed to perform this action"
		});
		
		accountObj.destroy().then(() => {
			return res.status(200).send({
				name: "OK",
				code: 200
			});
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * POST /profileImage
 * Uploads a profile image and associates it to the user
 * 
 * @returns A message indicating success
 */
router.post("/profileImage", (req, res) => {
	const { account } = req;
	if (!account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	
	if (!req.files || !req.files.file) {
		return res.status(400).send({
			name: "Bad Request",
			code: 400,
			message: "No file uploaded"
		});
	}
	
	let profileImage = req.files.file;
	
	if (fs.existsSync(`${__dirname}/../../resources/profileImages/${account.id}.png`)) {
		fs.unlinkSync(`${__dirname}/../../resources/profileImages/${account.id}.png`);
	}
	
	profileImage.mv(`${__dirname}/../../resources/profileImages/${account.id}.png`);
	account.update({
		profileImage: account.id
	}).then(account => {
		return res.status(200).send({
			name: "OK",
			code: 200
		});
	}).catch(error => errorHandler(req, res, error));
});

module.exports = router;