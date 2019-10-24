import React, { Component } from "react";
import { Card, Accordion } from "react-bootstrap";

export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }

  // URL check method from
  //https://stackoverflow.com/questions/1701898/how-to-detect-whether-a-string-is-in-url-format-using-javascript/1701911
  isUrl(value) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return regexp.test(value);
  }

  render() {
    let list = Object.keys(this.props.name).map(key => {
      let value = this.props.name[key];
      if (this.isUrl(value)) {
        return (
          <div>
            <li>
              <strong>{String(key)}:</strong>{" "}
              <a
                href={this.props.name[key]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.name[key]}
              </a>
            </li>
          </div>
        );
      } else {
        return (
          <div>
            <li>
              <strong>{String(key)}:</strong> {this.props.name[key]}
            </li>
          </div>
        );
      }
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
