import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import App from "./Apps/App";
import * as serviceWorker from "./serviceWorker";
import App from "./MemeGenerator/App";

ReactDOM.render(
  <div>
    <App />
  </div>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
