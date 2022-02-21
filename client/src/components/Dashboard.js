import React, { Component } from "react";
import axios from "axios";
import under from "../assets/under.svg";

export default class Dashboard extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      user: null,
    };
    this.dashboard = this.dashboard.bind(this);

    this.dashboard();
  }

  dashboard = async () => {
    console.log(`DASHBOARD IN`);
    axios.defaults.headers.common["token"] = this.props.token;
    await axios.get("http://localhost:4000/dashboard/user").then((data) => {
      this.setState({
        user: data.data.user,
        name: data.data.user.name,
        email: data.data.user.email,
      });
    });
  };

  render() {
    return (
      <div className="flex justify-between items-center gap-5 p-8 bg-sun-500 rounded-2xl md:flex-col">
        <div className="flex flex-col gap-12">
          <p className="text-2xl">
            NAME : {this.state.name === null ? "" : this.state.name}
          </p>
          <p className="text-2xl">
            EMAIL : {this.state.email === null ? "" : this.state.email}
          </p>
        </div>

        <img className="h-96" src={under} alt="" srcset="" />
      </div>
    );
  }
}
