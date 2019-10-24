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
          Made by{" "}
          <a href="https://github.com/bonniepeters" target="_blank">
            Bonnie Peters
          </a>
          ,{" "}
          <a href="https://github.com/jaredsmorgan" target="_blank">
            Jared Morgan
          </a>
          ,{" "}
          <a href="https://github.com/Emme313" target="_blank">
            Melaina Valentine
          </a>
          ,{" "}
          <a href="https://github.com/wdixon2186" target="_blank">
            William Dixon
          </a>
        </p>
      </div>
    );
  }
}
