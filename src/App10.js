import React, { Component } from "react";

class App10 extends Component {
  constructor() {
    super();
    this.state = {
      name: "carlo",
      age: 29,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    );
  }
}

export default App10;
