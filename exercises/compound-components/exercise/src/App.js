import React, { Component } from "react";
import Stepper from "./Stepper";
import "./App.css";

const steps = [
  {
    title: "First Step!",
    content: "Here is the first step, its really good."
  },
  {
    title: "Second Step!",
    content: "First is the worst, second the best"
  },
  {
    title: "Third Step!",
    content: "THIRD STEP YOU MADE IT GJ!"
  },
];

class App extends Component {
  render() {
    return <Stepper steps={steps} />;
  }
}

export default App;
