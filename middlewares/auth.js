const bigPromise = require("./bigPromise");
const jwt = require("jsonwebtoken");
const User = require("../modules/userModel");
const CustomError = require("../utils/customError");

const isLoggedIn = bigPromise(async (req, res, next) => {
let token = req.headers.token;
if (!token) {
  return next(new CustomError("Login first to access this page", 401));
}
const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.user = await User.findById(decoded.id);
next();
});

module.exports = isLoggedIn;
