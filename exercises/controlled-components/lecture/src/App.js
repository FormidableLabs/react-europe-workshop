// @format
import React from "react";
import RadioGroup from "./RadioGroup";
import "./App.css";

const App = () => (
  <RadioGroup>
    <RadioGroup.Option value="First" label="1st" />
    <RadioGroup.Option value="Second" />
    <RadioGroup.Option value="Third" />
  </RadioGroup>
);

export default App;
