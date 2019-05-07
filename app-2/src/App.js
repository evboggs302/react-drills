import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      food: ["chicken", "bacon", "spaghetti", "sushi"]
    };
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.food[0]}</h2>
        <h2>{this.state.food[1]}</h2>
        <h2>{this.state.food[2]}</h2>
        <h2>{this.state.food[3]}</h2>
      </div>
    );
  }
}

export default App;
