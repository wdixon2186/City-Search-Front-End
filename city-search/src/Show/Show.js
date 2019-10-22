import React, { Component } from "react";
import listOfCities from "../cities-data.json";
import Comment from "../Comment/Comment";
import Accordion from "../Accordion/Accordion";

export default class List extends Component {
  constructor() {
    super();
    this.state = { valueSet: {} };
  }
  render() {
    let showCity = "Austin"; // this.props.match.params.city
    let city = listOfCities.filter(city => city.general.city === showCity);
    let population = city[0].population;
    let general = city[0].general;
    let bestPlacesData = city[0].bestPlacesData;
    let ageAndGender = city[0].ageAndGender;
    let raceAndOrigin = city[0].raceAndOrigin;
    let veterans = city[0].veterans;
    let housing = city[0].housing;
    let households = city[0].households;
    let education = city[0].education;
    let employmentAndHealth = city[0].employmentAndHealth;
    let business = city[0].business;
    let geography = city[0].geography;

    var result = Object.keys(population).map(function(key) {
      return [String(key), population[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }
    console.log("break");

    var result = Object.keys(general).map(function(key) {
      return [String(key), general[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }
    console.log("break");

    var result = Object.keys(bestPlacesData).map(function(key) {
      return [String(key), bestPlacesData[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }
    console.log("break");

    var result = Object.keys(ageAndGender).map(function(key) {
      return [String(key), ageAndGender[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }
    console.log("break");

    var result = Object.keys(raceAndOrigin).map(function(key) {
      return [String(key), raceAndOrigin[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }
    console.log("break");

    var result = Object.keys(veterans).map(function(key) {
      return [String(key), veterans[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }
    console.log("break");

    var result = Object.keys(housing).map(function(key) {
      return [String(key), housing[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }
    console.log("break");

    var result = Object.keys(households).map(function(key) {
      return [String(key), households[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }
    console.log("break");

    var result = Object.keys(education).map(function(key) {
      return [String(key), education[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }
    console.log("break");

    var result = Object.keys(employmentAndHealth).map(function(key) {
      return [String(key), employmentAndHealth[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }
    console.log("break");

    var result = Object.keys(business).map(function(key) {
      return [String(key), business[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }
    console.log("break");

    var result = Object.keys(geography).map(function(key) {
      return [String(key), geography[key]];
    });
    for (let i = 0; i < result.length; i++) {
      let x = result[i];
      console.log(x);
    }

    // console.log(result);

    // Recursive Object Function Starting points https://learn.co/lessons/js-looping-and-iteration-traversing-nested-objects-readme
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

    // function key(category) {
    //   Object.entries(category).forEach(([key, value]) => console.log(`${key}`));
    // }
    // key(city[0]);

    //   for (let category in city[0]) {
    // // text += bestPlacesData[x] + " ";
    // Object.entries(category).forEach(([key, value]) =>
    //   console.log(`${key}: ${value}`)
    // );
    //   }

    // function deepIterator(target) {
    //   // return key
    //   // return key value pairs for each nested object
    //   if (typeof target === "object") {
    //     for (const key in target) {
    //       console.log(`${key}:`);
    //       deepIterator(target[key]);
    //     }
    //   } else {
    //     console.log(target);
    //   }
    // }
    // deepIterator(city);

    // let populationDisplay = city.map(data => {
    //   return (
    //     <div>
    //       <p>
    //         <li>{data}</li>
    //       </p>
    //     </div>
    //   );
    // });

    return (
      <div>
        <h2>{listOfCities[0].general.city}</h2>
        <h3>{listOfCities[0].general.stateFull}</h3>
        <div>
          <Accordion
            options={city}
            onChange={valueSet => this.setState({ valueSet })}
            selectedSet={this.state.valueSet}
          />
          {/* <h4>Population</h4>
          <ul>
            {population}
            <li>
              {Object.keys(listOfCities[0].population)}:{" "}
              {listOfCities[0].population.popEst2018}
            </li>
            <li>Change: {listOfCities[0].population.popChange}</li>
            <li>Pop 2010: {listOfCities[0].population.Pop2010}</li>
          </ul> */}
          <Comment />
        </div>
      </div>
    );
  }
}

//On Click run function(method) that gives the for loop and prints out all the arrays for that section.
