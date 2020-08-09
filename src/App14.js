import React from "react";

class App14 extends React.Component {
  countNumber = () => {
    this.setState({
      count: this.state.count + 1,
    });
    // this.state.count = this.state.count++;
  };

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.countNumber = this.countNumber.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="test">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

export default App14;
