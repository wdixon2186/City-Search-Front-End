import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import axios from "axios";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      ListOfCities: [],
      filter: ""
    };
    this.filterByCityState = this.filterByCityState.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://city-fyndr.herokuapp.com/")
      .then(res => {
        console.log(res);
        this.setState({ ListOfCities: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  filterByCityState(e) {
    this.setState({ filter: e.target.value.substr(0, 20) });
  }

  // sort list by state alphabetically
  // sort cities within state alphabetically
  // sort cities into array by state
  // print array for each state

  render() {
    let filtered = this.state.ListOfCities.filter(city => {
      return city.city.indexOf(this.state.filter) !== -1;
    });

    let list = filtered.map(city => {
      return (
        <div key={city.bestPlacesData.rank}>
          <p>
            {/* <h4>{city.state.stateFull}</h4> */}
            <Link to={`/show/${city.city}`}>
              {city.bestPlacesData.rank}. {city.city}, {city.state.stateFull}
            </Link>
          </p>
        </div>
      );
    });

    return (
      <div>
        <div>
          <Search filter={this.filterByCityState} value={this.state.filter} />
        </div>
        <div className="listView">{list}</div>
      </div>
    );
  }
}
