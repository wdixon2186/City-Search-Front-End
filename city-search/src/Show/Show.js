import React, { Component } from "react";
import listOfCities from "../cities-data.json";
import Comment from "../Comment/Comment";

export default class List extends Component {
  render() {
    let cityPop = listOfCities[0].population;
    // console.log(cityPop);

    let showCity = "Austin"; // this.props.match.params.city
    let city = listOfCities.filter(city => city.general.city === showCity);
    // let population = city[0].population;
    console.log(city);

    // function shallowIterator(target) {
    //   for (const key in target) {
    //     if (typeof target[key] === "object") {
    //       for (const nestedKey in target[key]) {
    //         console.log(target[key][nestedKey]);
    //       }
    //     } else {
    //       console.log(target[key]);
    //     }
    //   }
    // }
    // shallowIterator(city);

    function deepIterator(target) {
      if (typeof target === "object") {
        for (const key in target) {
          deepIterator(target[key]);
        }
      } else {
        console.log(target);
      }
    }
    deepIterator(city);

    function key(category) {
      Object.entries(category).forEach(([key]) => console.log(`${key}`));
    }
    key(city[0]);

    //   for (let categoryx in city[0]) {
    // // text += bestPlacesData[x] + " ";
    // Object.entries(category).forEach(([key, value]) =>
    //   console.log(`${key}: ${value}`)
    // );
    //   }
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
