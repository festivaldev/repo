const express = require("express");
const router = express.Router();
const plist = require("plist");
const request = require("axios");
const crypto = require("crypto-js");

const bodyparser = require("body-parser");
const errorHandler = require(`${__dirname}/../utils/errorHandler`);
const { SERVER_PORT, BASE_URL } = process.env;

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

/**
 * GET /
 * Redirects to a configuration profile to enroll a device
 */
router.get("/", async (req, res) => {
	if (!req.account) return res.status(401).send({
		name: "Unauthorized",
		code: 401,
		message: "Invalid authorization token"
	});

	const { DeviceLinkNonce } = req.models;
	const linkNonce = await DeviceLinkNonce.findOrCreate({
		where: {
			accountId: req.account.id
		},
		defaults: {
			id: String.prototype.concat(req.account.id, new Date().getTime()),
		}
	}).spread(linkNonceObj => linkNonceObj);

	if (!linkNonce) return res.status(500).send({
		name: "Internal Server Error",
		code: 500,
		message: error.message
	});

	const payload = {
		PayloadContent: {
			URL: `${BASE_URL}/api/link/${linkNonce.id}`,
			DeviceAttributes: [
				"UDID",
				"PRODUCT",
				"VERSION"
			]
		},
		PayloadDisplayName: "Team FESTIVAL Device Enrollment",
		PayloadOrganization: "Team FESTIVAL",
		PayloadDescription: "This temporary profile will securely transmit your device UDID, product identifier (eg. iPhone8,2) and iOS build number to add your device to the Team FESTIVAL Cydia Repository. Your product identifier and iOS build number will also be sent to ipsw.me to get information about your current iOS. For more information, please refer to the FESTIVAL and ipsw.me privacy policies.",
		PayloadVersion: 1,
		PayloadIdentifier: "ml.festival.device-enrollment",
		PayloadUUID: "6FDD9C1A-BD51-4F1E-B087-EBC2A9203E0F",
		PayloadType: "Profile Service"
	}

	const propertyList = plist.build(payload);

	res.set("Content-Type", "application/x-apple-aspen-config");
	return res.status(200).send(propertyList);
});



/**
 * POST /:nonce
 * Endpoint for device enrollment, creates a new device object and assigns it to an account
 * 
 * NOTE: Fills information using https://api.ipsw.me/v2.1/[PRODUCT]/[VERSION]/info.json
 */
router.post("/:nonce", async (req, res) => {
	// if (!req.account) return res.status(401).send({
	// 	name: "Unauthorized",
	// 	code: 401,
	// 	message: "Invalid authorization token"
	// });
	if (!req.params.nonce) return res.status(400).send({
		name: "Bad Request",
		code: 400,
		message: "No nonce specified"
	});

	const { DeviceLinkNonce, Device } = req.models;

	const nonceObj = await DeviceLinkNonce.findOne({
		where: {
			id: req.params.nonce
		}
	});

	if (!nonceObj) return res.status(400).send({
		name: "Bad Request",
		code: 400,
		message: "Invalid nonce specified"
	});

	let data = "";
	req.setEncoding("utf8");

	req.on("data", (chunk) => {
		data += chunk;
	});

	req.on("end", async () => {
		req.body = plist.parse(data, {
			errorHandler: null
		});

		if (!req.body) return res.status(500).send({
			name: "Internal Server Error",
			code: 500
		});
		
		let deviceObj = await Device.findOne({
			where: {
				udid: req.body["UDID"]
			}
		}).then(deviceObj => {
			return deviceObj;
		});
		if (deviceObj) {
			nonceObj.destroy();
			return res.status(409).send({
				name: "Conflict",
				code: 409,
				message: "Device with this UDID is already registered"
			});
		}
		
		await request.get(`https://api.ipsw.me/v2.1/${req.body["PRODUCT"]}/${req.body["VERSION"]}/info.json`).then(response => {
			Device.create({
				id: String.prototype.concat(req.body["UDID"], new Date().getTime()),
				product: req.body["PRODUCT"],
				version: response.data[0].version,
				udid: req.body["UDID"],
				accountId: nonceObj.accountId
			}).then(deviceObj => {
				nonceObj.destroy();

				res.set('Location', `${BASE_URL}/api/link/done`);
				return res.redirect(301, `${BASE_URL}/api/link/done`);
			}).catch(error => errorHandler(req, res, error));
		}).catch(error => errorHandler(req, res, error));
	});
});



router.get("/done", (req, res) => {
	// TODO: Complete redirect
	return res.status(200).send({
		name: "OK",
		code: 200
	});
});

module.exports = router;