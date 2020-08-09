import React from "react";

function handleClick() {
  console.log("Clicked!");
}

function onMouseOver(event) {
  console.log(event);
}

function App13() {
  return (
    <div>
      <img src="https://www.fillmurray.com/200/100" onMouseOver={onMouseOver} />
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App13;
