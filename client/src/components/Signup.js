import React, { Component } from "react";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailState: "",
      nameState: "",
      passwordState: "",
    };
    this.signup = this.props.signup.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.sendSignup = this.sendSignup.bind(this);
  }

  updateEmail = (e) => {
    this.setState({ emailState: e.target.value });
  };
  updateName = (e) => {
    this.setState({ nameState: e.target.value });
  };
  updatePassword = (e) => {
    this.setState({ passwordState: e.target.value });
  };

  sendSignup = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.emailState,
      name: this.state.nameState,
      password: this.state.passwordState,
    };
    this.signup(data);
  };

  render() {
    return (
      <div className="flex flex-col items-center gap-5 p-8 bg-sun-500 rounded-2xl sm:p-0 sm:pt-8 sm:pb-8">
        <p className="text-2xl font-bold">SIGNUP FORM</p>
        <form
          className="flex flex-col gap-8 "
          onSubmit={(e) => this.sendSignup(e)}
        >
          <label className="flex gap-4 items-center justify-between text-bigstone-500 text-xl sm:flex-col sm:items-start">
            NAME
            <input
              className="rounded-2xl p-2"
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e) => this.updateName(e)}
            />
          </label>
          <label className="flex gap-4 items-center justify-between text-bigstone-500 text-xl sm:flex-col sm:items-start">
            EMAIL:
            <input
              className="rounded-2xl p-2"
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => this.updateEmail(e)}
            />
          </label>
          <label className="flex gap-4 items-center justify-between text-bigstone-500 text-xl sm:flex-col sm:items-start">
            PASSWORD:
            <input
              className="rounded-2xl p-2"
              type="password"
              placeholder="Enter your password"
              required
              onChange={(e) => this.updatePassword(e)}
            />
          </label>
          <button
            className="mt-8 bg-white rounded-2xl text-2xl text-bigstone-500 font-bold p-2 pl-4 pr-4"
            type="submit"
            // onClick={this.sendSignup}
          >
            SIGNUP
          </button>
        </form>
      </div>
    );
  }
}
