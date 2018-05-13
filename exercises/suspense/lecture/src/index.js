import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.unstable_createRoot(container);

root.render(<App />);
