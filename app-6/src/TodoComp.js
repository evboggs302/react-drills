import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.task}</li>
      </ul>
    );
  }
}
