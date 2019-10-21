import React, { Component } from "react";
import listOfCities from "../cities-data.json";
import Comment from "../Comment/Comment";

export default class List extends Component {
  render() {
    let cityPop = listOfCities[0].population;
    // console.log(cityPop);

    let showCity = "Austin"; // this.props.match.params.city
    let city = listOfCities.filter(city => city.general.city === showCity);
    let population = city[0].population;

    console.log(city);
    console.log(population);

    // let population = city.populations

    let populationDisplay = city.map(data => {
      return (
        <div>
          <p>
            <li>{data}</li>
          </p>
        </div>
      );
    });

    return (
      <div>
        <h2>{listOfCities[0].general.city}</h2>
        <h3>{listOfCities[0].general.stateFull}</h3>
        <div>
          <h4>Population</h4>
          <ul>
            {/* {population} */}
            {/* <li>
              {Object.keys(listOfCities[0].population)}:{" "}
              {listOfCities[0].population.popEst2018}
            </li>
            <li>Change: {listOfCities[0].population.popChange}</li>
            <li>Pop 2010: {listOfCities[0].population.Pop2010}</li> */}
          </ul>
          <Comment />
        </div>
      </div>
    );
  }
}
