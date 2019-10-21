import React, { Component } from "react";

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
        </div>
        <div>
          <form className="Comments">
            <label for="name">Name</label>
            <input
              className="name"
              type="text"
              placeholder="optional"
              name="name"
            />
            <label for="comment">Comment:</label>
            <textarea
              className="comment"
              type="text"
              placeholder="Enter comment here"
              name="comment"
            />
          </form>
        </div>
      </div>
    );
  }
}
