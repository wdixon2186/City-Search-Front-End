import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import listOfCities from "../cities-data.json";

export default class List extends Component {
  // sort list by state alphabetically
  // sort cities within state alphabetically
  // sort cities into array by state
  // print array for each state

  render() {
    let list = listOfCities.map(city => {
      return (
        <div key={city.city}>
          <p>
            {/* <h4>{city.state.stateFull}</h4> */}
            <Link to={`/show/${city.city}`}>
              {city.city}, {city.state.stateFull}
            </Link>
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
