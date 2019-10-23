import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

export default class List extends Component {
  constructor() {
    super();
    this.state = { review: { name: "", comment: "" } };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ review: { name: e.target.value } });
  }

  render() {
    return (
      <div className="reviewForm">
        <Form>
          <Form.Group md="4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="name"
              onChange="onChange"
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label for="comment">Comment</Form.Label>
            <Form.Control
              as="textarea"
              rpws="4"
              placeholder="Enter comment"
              name="comment"
              onChange="onChange"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
