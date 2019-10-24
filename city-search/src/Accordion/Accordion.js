import React, { Component } from "react";
import { Card, Accordion, useAccordionToggle } from "react-bootstrap";
import { Link } from "react-router-dom";
import Comment from "../Comment/Comment";
import CardComponent from "../Card/Card";

export default class AccordionComponent extends Component {
  render() {
    let {
      population,
      bestPlacesData,
      ageAndGender,
      raceAndOrigin,
      veterans,
      housing,
      households,
      education,
      employmentAndHealth,
      business,
      geography,
      reviews
    } = this.props.city;

    // let bestPlacesDataList = Object.keys(bestPlacesData).map(key => {
    //   let httpCheck = key.includes("https://");
    //   if (httpCheck === true) {
    //     return (
    //       <div>
    //         <li>
    //           <strong>{String(key)}:</strong>{" "}
    //           <a href={bestPlacesData[key]} target="_blank">
    //             {bestPlacesData[key]}
    //           </a>
    //         </li>
    //       </div>
    //     );
    //   } else {
    //     return (
    //       <div>
    //         <li>
    //           <strong>{String(key)}:</strong> {bestPlacesData[key]}
    //         </li>
    //       </div>
    //     );
    //   }
    // });

    // comments list based on available data
    let commentsList;
    if (reviews.length > 0) {
      commentsList = reviews.map(object => {
        let url = `/city/${this.props.city.city}/edit/review/${object._id}`;

        return (
          <div className="comments" key={object._id}>
            <div>
              <strong>Name:</strong> {object.name}
              <Link className="commentEdit" to={url}>
                edit
              </Link>
            </div>
            <div>
              <strong>Review:</strong> {object.comment}
            </div>
          </div>
        );
      });
    } else {
      commentsList = (
        <div>
          <em>No reviews yet. Leave one in the section below.</em>
        </div>
      );
    }

    return (
      <div>
        <Accordion defaultActiveKey="0">
          <CardComponent name={population} keyProp="0" title="Population" />
          <CardComponent
            name={bestPlacesData}
            keyProp="1"
            title="Us News' Ranking"
          />
          <CardComponent
            name={ageAndGender}
            keyProp="2"
            title="Age and Gender"
          />
          <CardComponent
            name={raceAndOrigin}
            keyProp="3"
            title="Race and Origin"
          />
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              <h4>Veterans</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <ul>
                  <li>
                    <strong>Veterans:</strong> {this.props.city.veterans}
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <CardComponent name={housing} keyProp="5" title="Housing" />
          <CardComponent name={households} keyProp="6" title="Households" />
          <CardComponent name={education} keyProp="7" title="Education" />
          <CardComponent
            name={employmentAndHealth}
            keyProp="8"
            title="Employment and Health"
          />
          <CardComponent name={business} keyProp="9" title="Business" />
          <CardComponent name={geography} keyProp="10" title="Geography" />
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="11">
              <h4>Reviews</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="11">
              <Card.Body>{commentsList}</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="12">
              <h4>Leave A Review</h4>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="12">
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
