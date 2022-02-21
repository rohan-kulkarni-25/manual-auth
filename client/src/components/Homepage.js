import React, { Component } from "react";
import Signup from "./Signup";
import axios from "axios";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Intro from "./Intro";
import ButtonDiv from "./ButtonDiv";
import Error from "./Error";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: <Signup signup={this.signup}></Signup>,
    };

    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.setState = this.setState.bind(this);
  }

  signup = async (data) => {
    console.log(`SIGNUP IN`);
    await axios
      .post("https://manual-auth.herokuapp.com/api/v1/signup", data)
      .then((data) => {
        if (data.data.success) {
          this.setState({ currentPage: <Login login={this.login}></Login> });
        }
      })
      .catch((error, res) => {
        this.setState({
          currentPage: (
            <Error message={`Account already exists please try login.`}></Error>
          ),
        });
      });
  };

  login = async (data) => {
    console.log(`LOGIN IN`);
    await axios
      .post("https://manual-auth.herokuapp.com/api/v1/login", data)
      .then((data) => {
        console.log(data);
        if (data.data.token) {
          this.setState({
            token: data.data.token,
            currentPage: <Dashboard token={data.data.token}></Dashboard>,
          });
        }
      })
      .catch((error) => {
        this.setState({
          currentPage: <Error message={`Password do not match !!`}></Error>,
        });
      });
  };
  render() {
    return (
      <div className="flex justify-around items-center m-24 gap-8 lg:flex-col-reverse sm:m-8">
        <Intro></Intro>
        <div className="flex flex-col justify-around bg-white shadow-md shadow-black rounded-2xl h-128 w-full md:h-fit sm:m-4">
          <ButtonDiv
            setState={this.setState}
            login={this.login}
            signup={this.signup}
          ></ButtonDiv>
          <div>{this.state.currentPage}</div>
        </div>
      </div>
    );
  }
}

// dashboard = async () => {
//   console.log(`DASHBOARD IN`);
//   axios.defaults.headers.common["token"] = this.state.token;
//   await axios.get("http://localhost:4000/dashboard/user").then((data) => {
//     this.setState({
//       user: data.data.user,
//       check: false,
//       currentPage: (
//         <Dashboard
//           user={this.state.check}
//           dashboard={this.dashboard}
//         ></Dashboard>
//       ),
//     });
//   });
// };

// eslint-disable-next-line no-lone-blocks
{
  /* <button
className="bg-black text-2xl text-white p-4"
onClick={() =>
  this.setState({
    currentPage: <ForgotPass></ForgotPass>,
  })
}
>
FORGOT PASSWORD
</button> */
}
