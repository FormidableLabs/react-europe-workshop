import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Spinner from "./Spinner";
import { SimpleCache } from "simple-cache-provider";
import { cache } from "./MessageDataSource";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.unstable_createRoot(container);

root.render(
  <SimpleCache.Provider value={cache}>
    <React.Timeout ms={2000}>
      {didExpire => (didExpire ? <Spinner /> : <App />)}
    </React.Timeout>
  </SimpleCache.Provider>
);
