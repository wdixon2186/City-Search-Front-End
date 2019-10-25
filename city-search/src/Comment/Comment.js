import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "anonymous", comment: "" };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeComment(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let review = {
      reviews: {
        name: this.state.name,
        comment: this.state.comment
      }
    };

    axios
      .put(`https://city-fyndr.herokuapp.com/${this.props.city.city}`, review)
      .then(res => {
        console.log(res.data);
      })
      .then(this.props.setRedirect)
      .then(
        this.setState({
          name: "anonymous",
          comment: ""
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="reviewForm">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group md="4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              action="/:city"
              method="put"
              placeholder="optional"
              name="name"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Enter comment"
              name="comment"
              value={this.state.comment}
              onChange={this.onChangeComment}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
