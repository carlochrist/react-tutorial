import React from "react";

function Joke(props) {
  console.log(props);

  //   let jokeClicked = false;

  //   toggleClicked = () => {
  //     console.log("test");
  //     jokeClicked = !jokeClicked;
  //   };

  return (
    <div className="joke">
      <h3 style={{ display: !props.question && "none" }}>
        Question: {props.question}
      </h3>
      <p style={{ color: !props.question && "blue" }}>
        Answer: {props.punchline}
      </p>
    </div>
  );
}

export default Joke;
