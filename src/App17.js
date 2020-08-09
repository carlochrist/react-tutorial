import React from "react";

class App17 extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleLogin}>
          {this.state.loggedIn ? "Logout" : "Login"}
        </button>
        <h1>
          You are currently {this.state.loggedIn ? "logged in" : "logged out"}.
        </h1>
      </div>
    );
  }
}

export default App17;
