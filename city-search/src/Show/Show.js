import React, { Component } from "react";
import Comment from "../Comment/Comment";

export default class List extends Component {
  render() {
    return (
      <div>
        <h2>City</h2>
        <h3>State</h3>
        <div>
          <h4>Population</h4>
          <ul>
            <li>Pop 2018: 1,000,000</li>
            <li>Pop 2010: 500,000</li>
            <li>Change: 100%</li>
          </ul>
          <Comment />
        </div>
      </div>
    );
  }
}
