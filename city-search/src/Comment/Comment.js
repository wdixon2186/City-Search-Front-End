import React, { Component } from "react";

export default class List extends Component {
  constructor() {
    super();
    this.state = { commentSet: { name: "", comment: "" } };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ commentSet: { name: e.target.value } });
  }

  render() {
    return (
      <div>
        <form className="Comments">
          <div>
            <label for="name">Name</label>
            <input
              className="name"
              type="text"
              placeholder="optional"
              name="name"
              onChange="onChange"
            />
          </div>
          <div>
            <div>
              <label for="comment">Comment</label>
            </div>
            <textarea
              className="comment"
              type="text"
              placeholder="Enter comment here"
              name="comment"
              onChange="onChange"
            />
          </div>
        </form>
      </div>
    );
  }
}
