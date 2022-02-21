const express = require("express");
const router = express.Router();
const { dashboard } = require("../controllers/dashboard");
const isLoggedIn = require("../middlewares/auth");

router.route("/user").get(isLoggedIn, dashboard);

module.exports = router;
