import React from "react";

class App11 extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin = () => {
    console.log(this.state.loggedIn);
    console.log(!this.state.loggedIn);
    this.setState({ loggedIn: !this.state.loggedIn });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleLogin}>
          {" "}
          {this.state.loggedIn ? "Logout" : "Login"}
        </button>
        <h1>You are currently logged {this.state.loggedIn ? "in" : "out"}</h1>
      </div>
    );
  }
}

export default App11;
