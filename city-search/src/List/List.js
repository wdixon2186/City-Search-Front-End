import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import axios from "axios";

// imported in App.js
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
        this.setState({ ListOfCities: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  filterByCityState(e) {
    this.setState({ filter: e.target.value.substr(0, 20) });
  }

  render() {
    // Filter city list based on user input in search bar
    let filtered = this.state.ListOfCities.filter(city => {
      return (
        city.city.toLowerCase().indexOf(this.state.filter.toLowerCase()) !==
          -1 ||
        city.state.stateFull
          .toLowerCase()
          .indexOf(this.state.filter.toLowerCase()) !== -1
      );
    });

    // Map through cities and display list sorted by rank
    let list = filtered.map(city => {
      return (
        <div key={city.bestPlacesData.rank}>
          <p>
            {/* Link to individual city pages */}
            <Link to={`/show/${city.city}`}>
              {/* List each city's rank, name, and state */}
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
