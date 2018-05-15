/**
 * CONTROLLED COMPONENT EXERCISE
 *
 * Make Stepper a controlled component. It should take 
 * `stepIndex` and `onChange` props to allow the
 * parent component to manage the step state.
 *
 * `onChange` should be called with the new step's
 * index when a new step is active. 
 *
 * Refactor App to be a class component that manages 
 * the `stepIndex` state.
 *
 * <Stepper
 *   steps={steps}
 *   stepIndex={this.state.stepIndex}
 *   onChange={this.onStepChange}
 *  />
 *
 * STRETCH GOAL
 *
 * What happens if you click "Previous" on the first
 * step, or "Next" on the last? Add two additional
 * props to Stepper, `canMoveForward` and `canMoveBack`
 * that return whether the "Next" or "Forward" buttons
 * are disabled, respectively.
 *
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
];

const App = () => (
  <Stepper steps={steps}>
    <Stepper.Status />
    <Stepper.ActiveStep />
    <Stepper.Controls />
  </Stepper>
);

export default App;
