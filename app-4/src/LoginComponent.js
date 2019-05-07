import React, { Component } from "react";

export default class LoginComp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  changeUser(value) {
    this.setState({
      username: value
    });
  }

  changePass(value) {
    this.setState({
      password: value
    });
  }

  render() {
    return (
      <div className="App">
        <input
          placeholder="Username"
          onChange={e => this.changeUser(e.target.value)}
        />
        <input
          placeholder="Password"
          onChange={e => this.changePass(e.target.value)}
        />
        <button
          onClick={() =>
            alert(
              "Username: " +
                this.state.username +
                "  Password: " +
                this.state.password
            )
          }
        >
          Login
        </button>
      </div>
    );
  }
}
