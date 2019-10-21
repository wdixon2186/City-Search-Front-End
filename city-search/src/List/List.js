import React, { Component } from "react";
import searchBar from "../Search/Search";
import Data from "../city-architecture.json";

export default class List extends Component {
  constructor() {
    super();
    this.state = { Data };
  }
  // filterByName(e) {
  //   this.setState({ filter: e.target.value.substr(0, 22) });
  // }
  render() {
    return (
      <div>
        <div>
          <form className="search">
            <input
              className="searchBar"
              type="text"
              placeholder="City or State"
              name="search"
              // value={this.state.filter}
              // onChange={this.filterByName}
            />
          </form>
        </div>
        <h2>State</h2>
        <h3>City</h3>
      </div>
    );
  }
}
