import React, { Component } from "react";
import ForgotPass from "./ForgotPass";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailState: "",
      passwordState: "",
    };
    this.login = this.props.login.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.sendLogin = this.sendLogin.bind(this);
  }

  updateEmail = (e) => {
    this.setState({ emailState: e.target.value });
  };
  updatePassword = (e) => {
    this.setState({ passwordState: e.target.value });
  };

  sendLogin = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.emailState,
      password: this.state.passwordState,
    };
    this.login(data);
  };

  render() {
    return (
      <div className="flex flex-col items-center gap-5 p-8 bg-sun-500 rounded-2xl sm:p-0 sm:pt-8 sm:pb-8">
        <p className="text-2xl font-bold">LOGIN FORM</p>
        <form
          className="flex flex-col gap-8"
          onSubmit={(e) => this.sendLogin(e)}
        >
          <label
            htmlFor=""
            className="flex gap-4 items-center justify-between text-bigstone-500 text-xl sm:flex-col sm:items-start"
          >
            EMAIL:
            <input
              className="rounded-2xl p-2"
              type="email"
              name=""
              id=""
              placeholder="Enter your name"
              onChange={(e) => this.updateEmail(e)}
            />
          </label>
          <label
            htmlFor=""
            className="flex gap-4 items-center justify-between text-bigstone-500 text-xl sm:flex-col sm:items-start"
          >
            PASSWORD:
            <input
              className="rounded-2xl p-2"
              type="password"
              name=""
              id=""
              placeholder="Enter your password"
              onChange={(e) => this.updatePassword(e)}
            />
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.setState({
                currentPage: <ForgotPass></ForgotPass>,
              });
            }}
            className="font-bold self-start"
          >
            Forgot Password ?
          </button>
          <button
            className="mt-8 bg-white rounded-2xl text-2xl text-bigstone-500 font-bold p-2 pl-4 pr-4"
            type="submit"
            onClick={this.sendLogin}
          >
            LOGIN
          </button>
        </form>
      </div>
    );
  }
}
