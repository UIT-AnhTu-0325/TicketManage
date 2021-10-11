const express = require("express");
const { requireSignin } = require("../common-middleware");
const uploader = require("../common-middleware/uploader");
const { profiles } = require("../controller/profiles");
const router = express.Router();

router.post("/create-profile", requireSignin, uploader.single("avatar"), profiles);

module.exports = router;