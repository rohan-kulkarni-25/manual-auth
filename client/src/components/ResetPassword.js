import React, { useState } from "react";

export default function ResetPassword({ resetPassword }) {
  const [password, setpassword] = useState(null);

  const updatepassword = (e) => {
    setpassword(e.target.value);
  };

  const sendresetPassword = () => {
    const data = {
      password,
    };
    resetPassword(data);
  };

  return (
    <div className="flex flex-col items-start gap-5 p-8 bg-sun-500 rounded-2xl">
      <p className="text-2xl ">ENTER NEW PASSWORD</p>
      <form className="flex flex-col gap-4">
        <input
          className="shadow-sm shadow-black rounded-2xl text-xl p-2"
          type="password"
          name=""
          id=""
          onChange={(e) => updatepassword(e)}
        />
      </form>
      <button
        className="bg-white rounded-2xl text-xl text-bigstone-500 font-bold p-2 pl-4 pr-4"
        type="submit"
        onClick={sendresetPassword}
      >
        RESET PASSOWORD
      </button>
    </div>
  );
}
