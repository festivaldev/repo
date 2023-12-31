const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const fileupload = require("express-fileupload");

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());
router.use(fileupload());

router.use(require(`${__dirname}/../../utils/modelTemplates`));

router.use("/", require("./Rating"));
router.use("/", require("./Review"));
router.use("/", require("./Package"));
router.use("/", require("./Version"));

module.exports = router;