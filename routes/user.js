const express = require("express");
const router = express.Router();
const {
  signUp,
  login,
  sendOTP,
  checkOTP,
  resetPassword,
} = require("../controllers/userController");

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/getOTP").post(sendOTP);
router.route("/forgetPassword").post(checkOTP);
router.route("/resetPassword").post(resetPassword);

module.exports = router;
