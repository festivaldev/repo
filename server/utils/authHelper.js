const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const errorHandler = require(`${__dirname}/../utils/errorHandler`);
const UserRole = require(`${__dirname}/../UserRole`)

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
	const { Account, Device } = req.models;
	
	const developerHeader = req.headers["x-packd-usage"];
	const developerId = typeof developerHeader !== "undefined" && developerHeader != "undefined" ? developerHeader.split(" ")[1] : undefined;
	
	if (developerId) {
		await Account.findOne({
			where: {
				id: developerId,
				role: {
					[Sequelize.Op.gte]: UserRole.DEVELOPER
				}
			}
		}).then(accountObj => {
			if (accountObj) {
				req.developer = accountObj;
			}
		}).catch(error => errorHandler(req, res, error));
	}
	
	const authHeader = req.headers["authorization"];
	let authToken = typeof authHeader !== "undefined" && authHeader != "undefined" ? authHeader.split(" ")[1] : undefined;
	
	if ((typeof authToken === "undefined" || authToken == "undefined") && req.cookies["authToken"]) {
		authToken = req.cookies["authToken"];
	}
	
	if (typeof authToken === "undefined" || authToken == "undefined") return next();
	
	jwt.verify(authToken, JWT_SECRET, (error, decoded) => {
		if (error) return next();
		
		Account.findOne({
			where: {
				id: String(decoded.userId),
				email: String(decoded.email),
				active: true
			},
			include: [{
				model: Device,
				as: "devices"
			}]
		}).then(accountObj => {
			if (accountObj) {
				req.account = accountObj;
			}
			
			return next();
		}).catch(error => errorHandler(req, res, error));
	});
}