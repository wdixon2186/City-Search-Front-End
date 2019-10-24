import React, { Component } from "react";
import { Card, Accordion } from "react-bootstrap";

export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }

  render() {
    let list = Object.keys(this.props.name).map(key => {
      return (
        <div>
          <li>
            <strong>{String(key)}:</strong> {this.props.name[key]}
          </li>
        </div>
      );
    });

    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.keyProp}>
          <h4>{this.state.title}</h4>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.keyProp}>
          <Card.Body>
            <ul>
              <li>{list}</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
