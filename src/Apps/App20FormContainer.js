import React from "react";
import App20FormComponent from "./App20FormComponent";

class App20FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "0",
      gender: "",
      location: "Austria",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  handleChange(event) {
    console.log(event.target);
    console.log(event.target.type);
    console.log(event.target.checked);
    const { name, value, type, checked } = event.target;
    if (type === "checked") {
      this.setState({
        [name]: checked,
      });
    } else if (type === "checkbox") {
      this.setState({
        [name]: checked,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  submitData() {}

  render() {
    return (
      <App20FormComponent handleChange={this.handleChange} data={this.state} />
    );
  }
}

export default App20FormContainer;
