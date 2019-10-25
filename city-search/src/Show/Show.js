import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Accordion from "../Accordion/Accordion";
import axios from "axios";

// imported in App.js
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    let url = `/show/${this.props.city.city}`;
    if (this.state.redirect === true) {
      return <Redirect to={url} />;
    }
  };

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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.redirect !== prevState.redirect) {
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
          <Accordion
            city={city}
            setRedirect={this.setRedirect}
            renderRedirect={this.renderRedirect}
          />
        </div>
      </div>
    );
  }
}
