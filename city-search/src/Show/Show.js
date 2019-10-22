import React, { Component } from "react";
import listOfCities from "../cities-data.json";
import Comment from "../Comment/Comment";
import Accordion from "../Accordion/Accordion";

export default class List extends Component {
  render() {
    const showCity = this.props.match.params.city;
    let city = listOfCities.filter(city => city.general.city === showCity)[0];
    console.log(showCity);
    console.log(city);
    return (
      <div>
        <h2>{city.general.city}</h2>
        <h3>{city.general.stateFull}</h3>
        <div>
          <Accordion city={city} />
          <Comment />
        </div>
      </div>
    );
  }
}
