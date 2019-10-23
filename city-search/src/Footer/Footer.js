import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Link to="/about">
          <h3>About</h3>
        </Link>
        <p>
          Made By: Jared Morgan, Melaina Valentine, Bonnie Peters, and William
          Dixon
        </p>
      </div>
    );
  }
}
