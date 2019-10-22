import React, { Component } from "react";
import Logo from "../public/city-fyndr-logo.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={Logo} alt="logo" />
      </div>
    );
  }
}
