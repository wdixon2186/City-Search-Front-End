import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import listOfCities from "../cities-data.json";

export default class List extends Component {
  render() {
    let list = listOfCities.map(city => {
      return (
        <div key={city.general.city}>
          <p>
            <h4>{city.general.stateFull}</h4>
            <Link to={`/show/${city.general.city}`}>{city.general.city}</Link>
          </p>
        </div>
      );
    });
    return (
      <div>
        <div>
          <Search />
        </div>
        <div>{list}</div>
      </div>
    );
  }
}
