import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", comment: "", redirect: false };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.setRedirect = this.setRedirect.bind(this);
    // this.renderRedirect = this.renderRedirect.bind(this);
  }

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   });
  // };
  // renderRedirect = () => {
  //   let url = `/show/${this.props.match.params.city}`;
  //   if (this.state.redirect) {
  //     window.location.reload(false);
  //   }
  // };
  onChangeName(e) {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  }
  onChangeComment(e) {
    this.setState({ comment: e.target.value });
    console.log(this.state.comment);
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
      .then(this.setRedirect);
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
              onChange={this.onChangeName}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label for="comment">Comment</Form.Label>
            <Form.Control
              as="textarea"
              rpws="4"
              placeholder="Enter comment"
              name="comment"
              onChange={this.onChangeComment}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
