import React, { useState } from "react";

export default function EnterEmail({ getOtp }) {
  const [email, setemail] = useState(null);

  const updateEmail = (e) => {
    setemail(e.target.value);
  };

  const sendOTP = () => {
    const data = {
      email: email,
    };
    getOtp(data);
  };
  return (
    <div className="flex flex-col items-start gap-5 p-8 bg-sun-500 rounded-2xl sm:p-4">
      <p className="text-2xl sm:text-lg">Enter your registered email</p>
      <form className="flex flex-col gap-4">
        <input
          className="shadow-sm shadow-black rounded-2xl text-xl p-2 sm:text-lg"
          type="email"
          name=""
          id=""
          onChange={(e) => updateEmail(e)}
        />
      </form>
      <button
        className="bg-white rounded-2xl text-2xl text-bigstone-500 font-bold p-2 pl-4 pr-4 sm:text-lg"
        type="submit"
        onClick={sendOTP}
      >
        SEND OTP
      </button>
    </div>
  );
}
