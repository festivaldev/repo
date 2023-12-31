const express = require("express");
const router = express.Router();

router.use("/", require("./../utils/authHelper"));
// router.get("/", (req, res) => {
// 	res.status(200).send({
// 		activeSince: new Date(Math.floor(new Date().getTime() / 1000 - (process.uptime())) * 1000)
// 	});
// });

router.use("/account", require("./Account"));
router.use("/auth", require("./Auth"));
router.use("/devices", require("./Device"));
router.use("/link", require("./Link"));
router.use("/packages", require("./Packages"));
router.use("/statistics", require("./Statistics"));

module.exports = router;