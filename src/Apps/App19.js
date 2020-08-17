import React from "react";

class App19 extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      LastName: "",
      isFriendly: true,
      gender: "",
      favColor: "blue",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // object-destructuring
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
    // console.log(event);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleChange}
          placeholder="First Name"
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleChange}
          placeholder="Last Name"
        />
        <h1>First name: {this.state.firstName}</h1>
        <h1>Last name: {this.state.lastName}</h1>

        <textarea value={"Some default value"} onChange={this.handleChange} />

        <br />

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          IsFriendly?
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>

        <h2>You are a {this.state.gender} </h2>

        <br />

        <label>Favorite color: </label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>

        <h2>Picked color: {this.state.favColor}</h2>

        <button>Submit</button>
      </form>
    );
  }
}

export default App19;

// {this.state.dataLoaded ? this.state.fetchedData?.name : null}
// {this.state.dataLoaded ? this.state.fetchedData?.gender : null}
// {this.state.dataLoaded ? this.state.fetchedData?.email : null}

// {this.state.fetchedData.name.title}
// {this.state.fetchedData.name.first}
// {this.state.fetchedData.name.last}
