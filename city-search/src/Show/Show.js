import React, { Component } from "react";
import Accordion from "../Accordion/Accordion";
import axios from "axios";

export default class List extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     city: this.props.match.params.city,
  //     apiCity: null
  //   };
  // }
  componentDidMount() {
    const showCity = this.props.match.params.city;
    const URL = `https://city-fyndr.herokuapp.com/${showCity}`;
    axios
      .get(URL)
      .then(res => {
        // console.log(res.data);
        this.props.setName(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    const city = this.props.cityName;
    // let city = listOfCities.filter(city => city.city === showCity)[0];
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
