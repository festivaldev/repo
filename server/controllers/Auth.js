const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const request = require("axios");

const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const crypto = require("crypto-js");
const UserRole = require(`${__dirname}/../UserRole`);
const errorHandler = require(`${__dirname}/../utils/errorHandler`);
const { JWT_SECRET, SERVER_PORT } = process.env;

Array.prototype.lastObject = function() {
	return this[this.length - 1];
}

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

/**
 * POST /register
 * Creates a new account object
 * 
 * @returns A JWT containing username, E-Mail and role, expiring in 2 hours from creation
 */
router.post("/register", (req, res) => {
	const { Account } = req.models;
	
	Account.findOne({
		where: {
			[Sequelize.Op.or]: {
				username: req.body.username,
				email: req.body.email
			}
		}
	}).then(accountObj => {
		if (accountObj) return res.status(409).send({
			name: "Conflict",
			code: 409,
			message: "Username or E-Mail address already in use"
		});
		
		Account.findAndCountAll().then(accounts => {
			const hashedPassword = crypto.SHA256(req.body.password).toString(crypto.enc.Hex);
			Account.create({
				id: String.prototype.concat(req.body.username, req.body.email, hashedPassword, new Date().getTime()),
				username: req.body.username,
				email: req.body.email,
				password: req.body.password,
				role: (accounts.count > 0 && accounts.rows.lastObject().role != UserRole.MIGRATE) ? UserRole.USER : UserRole.ADMINISTRATOR | UserRole.MODERATOR | UserRole.DEVELOPER,
				lastLogin: new Date().toUTCString()
			}).then(async accountObj => {
				let token = jwt.sign({
					userId: accountObj.id,
					email: accountObj.email,
					role: accountObj.role
				}, JWT_SECRET, {
					expiresIn: 7200
				});
				
				if ((accountObj.role & UserRole.ADMINISTRATOR) != UserRole.ADMINISTRATOR) {
					await request.put(`http://localhost:${SERVER_PORT}/api/statistics/accountCreation`);
				}
				
				return res.status(200).cookie("authToken", token, { expires: new Date(new Date().getTime() + (7200 * 1000)) }).json({
					auth: true,
					token: token,
					role: accountObj.role
				});
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	}).catch(error => errorHandler(req, res, error));
});



/**
 * POST /login
 * Checks if the submitted credentials are valid and returns a authentication token (JWT)
 * 
 * @returns A JWT containing username, E-Mail and role, expiring in 2 hours from creation
 */
router.post("/login", (req, res) => {
	const { Account } = req.models;
	
	if (!req.body.username || !req.body.password) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "No username or password provided"
	});
	
	Account.findOne({
		where: {
			[Sequelize.Op.or]: {
				username: req.body.username,
				email: req.body.email
			}
		}
	}).then(async accountObj => {
		if (!accountObj || !accountObj.usernameValid(req.body.username)) return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "User not found or account is inactive"
		});
		
		if (!accountObj.passwordValid(req.body.password)) return res.status(401).send({
			name: "Unauthorized",
			code: 401,
			message: "Invalid password"
		});
		
		accountObj.update({
			lastLogin: new Date().toUTCString()
		});
		
		let token = jwt.sign({
			userId: accountObj.id,
			email: accountObj.email,
			role: accountObj.role
		}, JWT_SECRET, {
			expiresIn: 7200
		});
		
		//await request.put(`http://localhost:${SERVER_PORT}/api/statistics/login`);
		
		return res.status(200).cookie("authToken", token, { expires: new Date(new Date().getTime() + (7200 * 1000)) }).json({
			auth: true,
			token: token,
			role: accountObj.role
		});
	}).catch(error => errorHandler(req, res, error));
});



/**
 * GET /verify
 * Checks if the bearer token is still valid and, if true, returns a new token
 * 
 * @returns A JWT containing username, E-Mail and role, expiring in 2 hours from creation
 */
router.get("/verify", (req, res) => {
	if (!req.account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});
	
	let token = jwt.sign({
		userId: req.account.id,
		email: req.account.email,
		role: req.account.role
	}, JWT_SECRET, {
		expiresIn: 7200
	});
	
	return res.status(200).cookie("authToken", token, { expires: new Date(new Date().getTime() + (7200 * 1000)) }).json({
		auth: true,
		token: token,
		role: req.account.role
	});
});

module.exports = router;