import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import Architecture from "../city-architecture.json";
// import listOfCities from "../cities-data.json";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import List from "../List/List";
import Show from "../Show/Show";
// import Card from "react-bootstrap/Card";
// import Search from "../Search/Search.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "" };
    this.setName = this.setName.bind(this);
  }

  setName(city) {
    this.setState({ city: city });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={List} />
          <Route
            path="/show/:city"
            render={routerProps => (
              <Show
                match={routerProps.match}
                setName={this.setName}
                city={this.setState.city}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
