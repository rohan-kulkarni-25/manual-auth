import React, { Component } from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="flex flex-col items-center ">
        <Header></Header>
        <Homepage></Homepage>
        <Footer></Footer>
      </div>
    );
  }
}
