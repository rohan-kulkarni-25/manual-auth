import React from "react";

import ERROR from "../assets/error.svg";

export default function Error({ error, message }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl font-semibold sm:text-xl">{message}</p>
      <img className="h-80 sm:h-56" src={ERROR} alt="" srcset="" />
    </div>
  );
}
