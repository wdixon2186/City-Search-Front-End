import React, { Component } from "react";
import { Form } from "react-bootstrap";

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state.filter = {
  //     filter: ""
  //   };
  // }

  render() {
    return (
      <div>
        <Form>
          <Form.Group md="4">
            <Form.Control
              type="text"
              placeholder="Filter by City Name"
              name="search"
              value={this.props.value}
              onChange={this.props.filter}
            />
          </Form.Group>
          {/* <Form.Group md="4">
            <Button type="submit">Search</Button>
          </Form.Group> */}
        </Form>
      </div>
    );
  }
}

export default Search;
