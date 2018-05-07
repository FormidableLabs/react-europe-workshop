// @format
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
  state = {
    stepIndex: 0
  };

  onStepChange = stepIndex => {
    this.setState({ stepIndex });
  };

  canMoveForward = index => {
    return index < steps.length - 1;
  };

  canMoveBack = index => {
    return index > 0;
  };

  render() {
    return (
      <Stepper
        steps={steps}
        stepIndex={this.state.stepIndex}
        canMoveForward={this.canMoveForward}
        canMoveBack={this.canMoveBack}
        onChange={this.onStepChange}
      >
        <Stepper.Status />
        <Stepper.ActiveStep />
        <Stepper.Controls />
      </Stepper>
    );
  }
}

export default App;
