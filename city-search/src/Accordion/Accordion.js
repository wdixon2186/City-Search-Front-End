import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Comment from "../Comment/Comment";

export default class AccordionComponent extends Component {
    render() {
    let population = this.props.city.population;
    let state = this.props.city.state;
    let bestPlacesData = this.props.city.bestPlacesData;
    let ageAndGender = this.props.city.ageAndGender;
    let raceAndOrigin = this.props.city.raceAndOrigin;
    let housing = this.props.city.housing;
    let households = this.props.city.households;
    let education = this.props.city.education;
    let employmentAndHealth = this.props.city.employmentAndHealth;
    let business = this.props.city.business;
    let geography = this.props.city.geography;
    let reviews = this.props.city.reviews;

    let commentsList = reviews.map(object => {
      let url = `/city/${this.props.city.city}/edit/review/${object._id}`;

      return (
        <div className="comments">
          <div>
            <strong>name:</strong> {object.name}
            <Link className="commentEdit" to={url}>
              edit
            </Link>
          </div>
          <div>
            <strong>comment:</strong> {object.comment}
          </div>
        </div>
      );
    });

    let populationList = Object.keys(population).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {population[key]}
          </li>
        </div>
      );
    });

    let bestPlacesDataList = Object.keys(bestPlacesData).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {bestPlacesData[key]}
          </li>
        </div>
      );
    });

    let stateList = Object.keys(state).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {state[key]}
          </li>
        </div>
      );
    });

    let ageAndGenderList = Object.keys(ageAndGender).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {ageAndGender[key]}
          </li>
        </div>
      );
    });

    let raceAndOriginList = Object.keys(raceAndOrigin).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {raceAndOrigin[key]}
          </li>
        </div>
      );
    });

    let housingList = Object.keys(housing).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {housing[key]}
          </li>
        </div>
      );
    });

    let householdsList = Object.keys(households).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {households[key]}
          </li>
        </div>
      );
    });

    let educationList = Object.keys(education).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {education[key]}
          </li>
        </div>
      );
    });

    let employmentAndHealthList = Object.keys(employmentAndHealth).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {employmentAndHealth[key]}
          </li>
        </div>
      );
    });

    let businessList = Object.keys(business).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {business[key]}
          </li>
        </div>
      );
    });

    let geographyList = Object.keys(geography).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {geography[key]}
          </li>
        </div>
      );
    });
    console.log(commentsList);

    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h4>Population</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li>{populationList}</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <h4>Best Places Data</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>{bestPlacesDataList}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              <h4>State</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul>{stateList}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              <h4>Age and Gender</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ul>{ageAndGenderList}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              <h4>Race and Origin</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <ul>{raceAndOriginList}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              <h4>Veterans</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <ul>
                  <li>
                    <strong>Veterans:</strong> {this.props.city.veterans}
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              <h4>Housing</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <ul>{housingList}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
              <h4>Households</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <ul>{householdsList}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8">
              <h4>Education</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                <ul>{educationList}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="9">
              <h4>Employment And Health</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
                <ul>{employmentAndHealthList}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="10">
              <h4>Business</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="10">
              <Card.Body>
                <ul>{businessList}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="11">
              <h4>Geography</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="11">
              <Card.Body>
                <ul>{geographyList}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="12">
              <h4>Comments</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="12">
              <Card.Body>{commentsList}</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="13">
              <h4>Leave A Review</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="13">
              <Card.Body>
                <Comment city={this.props.city} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
