import React from "react";
import Conditional from "./components/Conditional";

class App16 extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  }

  render() {
    return (
      // <div>
      //   <Conditional isLoading={this.state.isLoading} />
      // </div>
      <div>{this.state.isLoading ? "Loading..." : <Conditional />}</div>
    );
  }
}

export default App16;
