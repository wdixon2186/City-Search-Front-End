import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

export default class CardComponent extends Component {
  render() {
    return (
      <div>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Parent Name
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>First Child: Value</li>
                <li>Second Child: Value</li>
                <li>Third Child: Value</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  }
}
