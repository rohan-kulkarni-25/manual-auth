import React from "react";
import SECURE from "../assets/secure.svg";

export default function Intro() {
  return (
    <div className="text-left h-full w-2/4 lg:w-full flex flex-col justify-center gap-8 p-8 rounded-2xl shadow-md shadow-black bg-big_stone-500 bg-sun-500 sm:gap-4 sm:p-4 sm:m-4 sm:w-3/5">
      <img className="h-48 sm:h-24" src={SECURE} alt="" srcset="" />
      <span className="text-bigstone-500 text-4xl font-semibold sm:text-2xl">
        MANUAL AUTH
      </span>
      <p className="text-xl sm:text-sm">
        In this project user can create account and login into dashboard. User
        can also user forgot password feature to reset password with OTP
        verification.
      </p>
    </div>
  );
}
