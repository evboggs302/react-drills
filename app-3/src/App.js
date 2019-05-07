import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: ["sushi", "chicken", "rice", "salsa"],
      filterStr: ""
    };
  }
  handleChange(value) {
    this.setState({
      filterStr: value
    });
  }

  render() {
    let foodList = this.state.foods
      .filter((el, index) => {
        return el.includes(this.state.filterStr);
      })
      .map((el, index) => {
        return <h2 key={index}> {el} </h2>;
      });
    return (
      <div className="App">
        {foodList}
        <input onChange={event => this.handleChange(event.target.value)} />
      </div>
    );
  }
}

export default App;
