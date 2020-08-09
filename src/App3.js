import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App3() {
  const firstName = "Carlo";
  const lastName = "Christ";
  const date = new Date();

  const styles = {
    color: "#FF8C00",
    backgroundColor: "blue",
    fontSize: 24,
  };

  return (
    <div>
      <h1 style={styles}>
        Hello {firstName} {lastName}. It is {date.getHours() % 12} o'clock!
      </h1>
    </div>
  );
}

export default App3;

//   <input type="checkbox"></input>
//   <p>washing dishes</p>
//   <input type="checkbox"></input>
//   <p>pour plants</p>
//   <input type="checkbox"></input>
//   <p>cook</p>
//   <input type="checkbox"></input>
//   <p>washing dishes</p>
