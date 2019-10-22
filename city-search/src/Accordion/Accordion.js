import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "../Card/Card";

export default class AccordionComponent extends Component {
  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card />
          {/* <Card>
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
          </Card> */}
        </Accordion>
      </div>
    );
  }
}
