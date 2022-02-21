import React, { Component } from "react";
import EnterEmail from "./EnterEmail";
import axios from "axios";
import EnterOTP from "./EnterOTP";
import ResetPassword from "./ResetPassword";
import Dashboard from "./Dashboard";
import Error from "./Error";

export default class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      token: null,
      fpcp: <EnterEmail getOtp={this.getOtp}></EnterEmail>,
    };

    this.getOtp = this.getOtp.bind(this);
    this.checkOtp = this.checkOtp.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  getOtp = async (data) => {
    console.log(data.email);
    this.setState({ email: data.email });
    console.log(`GET OTP REQUEST SENT`);
    await axios
      .post("https://manual-auth.herokuapp.com/api/v1/getOTP", data)
      .then((data) => {
        if (data.data.success) {
          this.setState({
            fpcp: (
              <EnterOTP
                email={this.state.email}
                checkOtp={this.checkOtp}
              ></EnterOTP>
            ),
          });
        }
      })
      .catch((error) =>
        this.setState({
          fpcp: (
            <Error
              message={`Please signup !! Email is not registered.`}
            ></Error>
          ),
        })
      );
  };

  checkOtp = async (data) => {
    console.log(`CHECK REQUEST SENT`);
    console.log(data);
    await axios
      .post("https://manual-auth.herokuapp.com/api/v1/forgetPassword", data)
      .then((data) => {
        if (data.data.success) {
          this.setState({
            token: data.data.token,
            fpcp: (
              <ResetPassword resetPassword={this.resetPassword}></ResetPassword>
            ),
          });
        }
      })
      .catch((error) =>
        this.setState({
          fpcp: <Error message={`OTP not valid ! Try again.`}></Error>,
        })
      );
  };

  resetPassword = async (data) => {
    data = {
      email: this.state.email,
      password: data.password,
    };
    console.log(`resetPassword REQUEST SENT`);
    console.log(this.state.token);
    axios.defaults.headers.common["token"] = this.state.token;
    await axios
      .post("https://manual-auth.herokuapp.com/api/v1/resetPassword", data)
      .then((data) => {
        if (data.data.success) {
          this.setState({
            fpcp: <Dashboard token={this.state.token}></Dashboard>,
          });
        }
      })
      .catch((error) =>
        this.setState({
          fpcp: (
            <Error
              message={`Something went wrong !! Please try again.`}
            ></Error>
          ),
        })
      );
  };

  render() {
    return <div>{this.state.fpcp}</div>;
  }
}
