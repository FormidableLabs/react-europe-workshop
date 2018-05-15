/**
 * COMPOUND COMPONENT EXERCISE
 *
 * Implement Stepper using the compound component API.
 * We want to be able to re-order the status, active step,
 * and controls. The API should look like this:
 *
 * <Stepper steps={steps}>
 *   <Stepper.Status />
 *   <Stepper.ActiveStep />
 *   <Stepper.Controls />
 * </Stepper>
 *
 * Re-ordering the components rendered inside Stepper
 * should re-order them in the UI. 
 *
 * STRETCH GOAL
 *
 * Maybe there are use cases for only allowing users to go
 * forward or back. Implement Stepper.Back and
 * Stepper.Forward to give our users that options.
 * Re-implement Stepper.Controls to use those new
 * components.
 */

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
  }
];

class App extends Component {
  render() {
    return <Stepper steps={steps} />;
  }
}

export default App;
