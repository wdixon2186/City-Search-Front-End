import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../public/city-fyndr-logo.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
      </div>
    );
  }
}
