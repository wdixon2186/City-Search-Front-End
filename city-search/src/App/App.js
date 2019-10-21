import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Architecture from "../city-architecture.json";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import List from "../List/List";
import Show from "../Show/Show";
import Search from "../Search/Search.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Architecture };
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={List} />
          <Route path="/show" component={Show} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
