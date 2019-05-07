import React, { Component } from "react";
import Todo from "./TodoComp";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      item: ""
    };

    this.addToList = this.addToList.bind(this);
  }

  keepItem(value) {
    this.setState({
      item: value
    });
  }

  addToList() {
    this.setState({
      list: [...this.state.list, this.state.item],
      item: ""
    });
  }

  render() {
    let storedList = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input
          placeholder="New Task"
          onChange={event => {
            this.keepItem(event.target.value);
          }}
        />
        <button onClick={this.addToList}>Add Item</button>
        <section>{storedList}</section>
      </div>
    );
  }
}

export default App;
