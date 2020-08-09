import React from "react";
import Joke from "./components/Joke";
import jokesData from "./data/jokesData";

function App6() {
  const jokeComponents = jokesData.map((joke) => {
    return (
      <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
    );
  });

  return <div className="joke">{jokeComponents}</div>;
}

export default App6;
