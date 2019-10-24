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
import About from "../About/About";
import Edit from "../Edit/Edit";
// import Card from "react-bootstrap/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { city: null };
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
          <Route path="/about" component={About} />
          <Route
            exact
            path="/city/:city/edit/review/:reviews_id"
            render={routerProps => (
              <Edit
                match={routerProps.match}
                setName={this.setName}
                city={this.setState.city}
                cityName={this.state.city}
              />
            )}
          />
          <Route
            path="/show/:city"
            render={routerProps => (
              <Show
                match={routerProps.match}
                setName={this.setName}
                city={this.setState.city}
                cityName={this.state.city}
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
