import React, { Component } from "react";
import Photo from "./ChildComp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Photo img={"https://i.imgflip.com/1id1mp.jpg"} />
      </div>
    );
  }
}

export default App;
