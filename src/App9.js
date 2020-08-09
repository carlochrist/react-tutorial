import React, { Component } from "react";
import ReactDOM from "react-dom";

// function App9() {
//     return (
//         <div>
//         <h1>Code goes here</h1>
//         </div>
//     )
// }

class App9 extends React.Component {
  render() {
    return (
      <div>
        <Header username="carlo" />
        <Greeting />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    );
  }
}

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1>Good {timeOfDay} to you, sir or madame!</h1>;
  }
}

ReactDOM.render(<App9 />, document.getElementById("root"));

export default App9;
