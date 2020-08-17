import React from "react";

function App20FormComponent(props) {
  return (
    <main>
      <form>
        <input
          placeholder="First Name"
          name="firstName"
          onChange={props.handleChange}
          value={props.data.firstName}
        />{" "}
        <br />
        <input
          placeholder="Last Name"
          name="lastName"
          onChange={props.handleChange}
          value={props.data.lastName}
        />{" "}
        <br />
        <input
          placeholder="Age"
          name="age"
          onChange={props.handleChange}
          value={props.data.age}
        />
        <br />
        <br />
        <label>Male</label>
        <input type="radio" name="gender" onChange={props.handleChange} />
        <label>Female</label>
        <input type="radio" name="gender" onChange={props.handleChange} />
        <br />
        <br />
        <select
          value={props.data.location}
          name="location"
          onChange={props.handleChange}
        >
          <option value="Germany">Germany</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Austria">Austria</option>
        </select>
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.data.isVegan}
          />
          Vegan?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.isKosher}
          />
          Kosher?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
          />
          Lactose free?
        </label>
        <br />
        <br />
        <button onClick={props.data.submitData}>Submit</button>
      </form>

      <hr />

      <h1>Entered Information</h1>
      <h3>
        Your name: {props.data.firstName} {props.data.lastName}
      </h3>
      <br />
      <h3>Your age: {props.data.age}</h3>
      <br />
      <p>Your location: {props.data.location}</p>
      <br />
      <p>Your dietary restrictions: </p>
      <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
      <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
      <p>Lactose free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
    </main>
  );
}

export default App20FormComponent;
