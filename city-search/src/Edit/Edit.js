import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Edit extends Component {
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
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Edit;
