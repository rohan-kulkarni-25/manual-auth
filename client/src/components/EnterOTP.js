import React, { useState } from "react";

export default function EnterOTP({ email, checkOtp }) {
  const [otp, setotp] = useState(null);

  const updateotp = (e) => {
    setotp(e.target.value);
  };

  const sendcheckOTP = () => {
    const data = {
      email: email,
      OTP: otp,
    };
    checkOtp(data);
  };

  return (
    <div className="flex flex-col items-start gap-5 p-8 bg-sun-500 rounded-2xl">
      <p className="text-2xl ">Enter OTP</p>
      <form className="flex flex-col gap-4">
        <input
          className="shadow-sm shadow-black rounded-2xl text-xl p-2"
          type="number"
          name=""
          id=""
          onChange={(e) => updateotp(e)}
        />
      </form>
      <button
        className="bg-white rounded-2xl text-2xl text-bigstone-500 font-bold p-2 pl-4 pr-4"
        type="submit"
        onClick={sendcheckOTP}
      >
        VERIFY OTP
      </button>
    </div>
  );
}

