// import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App1 } from "./App1";
import { App2 } from "./App2";
import reportWebVitals from "./reportWebVitals";

ReactDOM.hydrate(<App1 />, document.getElementById("app1"));
ReactDOM.hydrate(<App2 />, document.getElementById("app2"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
