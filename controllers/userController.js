const bigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customError");
const bcrypt = require("bcryptjs");
const User = require("../modules/userModel");
const cookieToken = require("../utils/cookieToken");
const generateOTP = require("../utils/generateOTP");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/emailSender");

exports.signUp = bigPromise(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user);
  if (user) {
    return next(new CustomError("User already exists please try login", 400));
  }

  const encPassword = await bcrypt.hash(password, 10);
  await User.create({
    name,
    email,
    password: encPassword,
  });
  const mailOptions = {
    from: "manualauth@noreply.com",
    to: email,
    subject: "Manual Auth App",
    html: `<h1>Hello ${name}</h1><br><p>Thanks for using Manual AUTH app and helping me in testing of the application.`,
  };
  const result = await sendMail(mailOptions);
  console.log(result);
  res.status(201).json({
    success: true,
    message: "User created successfully ! You can now login",
  });
});

exports.login = bigPromise(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new CustomError("Email and password are required", 400));
  }

  const user = await User.findOne({ email }).select("password");
  if (!user) {
    return next(new CustomError("Email is not registered", 400));
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return next(
      new CustomError(
        "Password not valid !! Please enter correct password or do forget password",
        400
      )
    );
  }
  cookieToken(user, res);
});

exports.sendOTP = bigPromise(async (req, res, next) => {
  const { email } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    return next(new CustomError("User not registered please signup", 400));
  }
  const OTP = generateOTP();
  console.log(email);
  const mailOptions = {
    from: "manualauth@noreply.com",
    to: email,
    subject: "Manual Auth App",
    html: `<h1>Hello </h1><br><p>Thanks for using Manual AUTH app and helping me in testing of the application.</p> <h2>You have requested for OTP. OTP is valid for 15 MINUTES</h2><h1>${OTP}</h1>`,
  };
  const result = await sendMail(mailOptions);
  console.log(result);
  const encOTP = await bcrypt.hash(OTP, 10);

  (user.forgotPasswordOTP = encOTP),
    (user.forgotPasswordExpiry = Date.now() + 1000 * 60 * 15),
    await user.save();

  res.status(200).json({
    success: true,
    message: "OTP SENT TO EMAIL",
  });
});

exports.checkOTP = bigPromise(async (req, res, next) => {
  let { email, OTP } = req.body;

  if (!email || !OTP) {
    return next(new CustomError("Please provide email and otp", 400));
  }
  let user = await User.findOne({ email });

  let time = user.forgotPasswordExpiry - Date.now();

  if (time < 0) {
    return next(new CustomError("OTP EXPIRED PLEASE TRY AGAIN", 400));
  }
  const validOTP = await bcrypt.compare(OTP, user.forgotPasswordOTP);

  if (!validOTP) {
    return next(new CustomError("OTP NOT VALID", 400));
  }
  cookieToken(user, res);
});

exports.resetPassword = bigPromise(async (req, res, next) => {
  const token = req.headers.token;
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const validToken = await jwt.verify(token, process.env.JWT_SECRET);
  console.log(validToken);
  if (!validToken) {
    return next("Please try again token is not valid");
  }
  const encPassword = await bcrypt.hash(password, 10);
  (user.forgotPasswordExpiry = undefined),
    (user.forgotPasswordOTP = undefined),
    (user.password = encPassword),
    await user.save();
  res.json({
    success: true,
    message: "Password updated successfully",
  });
});
