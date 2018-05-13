import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// unstable_createRoot is an unstable (obviously) API
// for creating a React component tree that is async
// *by default*
const container = document.getElementById("root");
const root = ReactDOM.unstable_createRoot(container);

root.render(<App />);
