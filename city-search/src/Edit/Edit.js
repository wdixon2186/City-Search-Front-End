import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", comment: "", redirect: false };
    this.onChangeName = this.onChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(e) {
    axios
      .get(
        `https://city-fyndr.herokuapp.com/city/${this.props.match.params.city}/edit/review/${this.props.match.params.reviews_id}`
      )
      .then(res => {
        this.setState({
          name: res.data.name,
          comment: res.data.comment
        });
      });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    let url = `/show/${this.props.match.params.city}`;
    if (this.state.redirect) {
      return <Redirect to={url} />;
    }
  };

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
        comment: this.state.comment,
        _id: this.state._id
      }
    };

    axios
      .put(
        `https://city-fyndr.herokuapp.com/${this.props.match.params.city}/${this.props.match.params.reviews_id}`,
        review
      )
      .then(this.setRedirect);
  }

  handleDelete(e) {
    e.preventDefault();
    axios
      .put(
        `https://city-fyndr.herokuapp.com/delete/${this.props.match.params.city}/${this.props.match.params.reviews_id}`
      )
      .then(console.log("Deleted"))
      .then(this.setRedirect)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
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
              <Form.Label for="comment">Review</Form.Label>
              <Form.Control
                as="textarea"
                rpws="4"
                placeholder="Enter comment"
                name="comment"
                value={this.state.comment}
                onChange={this.onChangeComment}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
        <div>
          <Button onClick={this.handleDelete}>Delete</Button>
        </div>
      </div>
    );
  }
}
