import React, { Component } from "react";

export default class Photo extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
      </div>
    );
  }
}
