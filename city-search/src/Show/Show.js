import React, { Component } from "react";
import listOfCities from "../cities-data.json";
import Comment from "../Comment/Comment";
import Accordion from "../Accordion/Accordion";

export default class List extends Component {
  constructor() {
    super();
    this.state = { valueSet: {} };
  }
  componentDidMount() {
    const showCity = this.props.match.params.city;

    console.log(showCity);
  }

  render() {
    const showCity = this.props.match.params.city;
    // this.props.match.params.city
    let city = listOfCities.filter(city => city.general.city === showCity);
    console.log(showCity);
    console.log(city);
    return (
      <div>
        <h2>{city[0].general.city}</h2>
        <h3>{city[0].general.stateFull}</h3>
        <div>
          {/* <Accordion
            options={city[0]}
            onChange={valueSet => this.setState({ valueSet })}
            selectedSet={this.state.valueSet}
          /> */}
          <Comment />
        </div>
      </div>
    );
  }
}
