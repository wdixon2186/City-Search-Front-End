import React, { Component } from "react";
import { Form } from "react-bootstrap";

// imported in List.js
class Search extends Component {
  render() {
    return (
      <div className="searchBar">
        <Form>
          <Form.Group md="4">
            <Form.Control
              type="text"
              placeholder="Filter by City or State"
              name="search"
              value={this.props.value}
              onChange={this.props.filter}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Search;
