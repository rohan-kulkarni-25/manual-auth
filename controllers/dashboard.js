const bigPromise = require("../middlewares/bigPromise");
const User = require("../modules/userModel");

exports.dashboard = bigPromise(async (req, res, next) => {
  const user = req.user;

  res.status(200).json({
    success: true,
    user,
  });
});
