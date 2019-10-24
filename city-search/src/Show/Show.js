import React, { Component } from "react";
import Accordion from "../Accordion/Accordion";
import axios from "axios";

// imported in App.js
export default class List extends Component {
  componentDidMount() {
    const showCity = this.props.match.params.city;
    const URL = `https://city-fyndr.herokuapp.com/${showCity}`;
    axios
      .get(URL)
      .then(res => {
        this.props.setName(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const city = this.props.cityName;
    // Delay render until after componentDidMount
    if (city === null) {
      return null;
    }

    return (
      <div>
        <h2 className="cityName">
          {city.city}, {city.state.stateShort}
        </h2>
        <div>
          <Accordion city={city} />
        </div>
      </div>
    );
  }
}
