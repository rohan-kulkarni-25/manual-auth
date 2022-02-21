import React from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function ButtonDiv({ setState, signup, login }) {
  return (
    <div className="p-4 flex gap-8 items-center justify-center">
      <button
        className="bg-sun-500 rounded-2xl text-xl text-white p-2 pl-4 pr-4 font-bold"
        onClick={() =>
          setState({
            currentPage: <Signup signup={signup}></Signup>,
          })
        }
      >
        SIGNUP
      </button>
      <button
        className="bg-sun-500 rounded-2xl text-xl text-white p-2 pl-4 pr-4 font-bold"
        onClick={() =>
          setState({
            currentPage: <Login setState={setState} login={login}></Login>,
          })
        }
      >
        LOGIN
      </button>
    </div>
  );
}
