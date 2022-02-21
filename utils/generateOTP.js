const generateOTP = () => {
  let OTP = "";
  for (let index = 0; index < 6; index++) {
    OTP = OTP + String(Math.trunc(Math.random() * 9));
  }
  return OTP;
};

module.exports = generateOTP;
