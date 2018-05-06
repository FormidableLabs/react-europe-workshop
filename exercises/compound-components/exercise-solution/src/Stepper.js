import React, { Component } from "react";

const StepContext = React.createContext();

const StepperPrevious = () => (
  <StepContext.Consumer>
    {({ hasPrevious, stepBack }) => (
      <button className="step-btn" disabled={!hasPrevious} onClick={stepBack}>
        Previous
      </button>
    )}
  </StepContext.Consumer>
);

const StepperNext = () => (
  <StepContext.Consumer>
    {({ hasNext, stepForward }) => (
      <button className="step-btn" disabled={!hasNext} onClick={stepForward}>
        Next
      </button>
    )}
  </StepContext.Consumer>
);

const StepperControls = () => (
  <React.Fragment>
    <StepperNext />
    <StepperPrevious />
  </React.Fragment>
);

const StepperStatus = () => (
  <StepContext.Consumer>
    {({ steps, activeStepIndex, goToIndex }) => (
      <div className="stepper-status">
        {steps.map((step, i) => (
          <React.Fragment>
            <span
              className="status-item"
              onClick={() => goToIndex(i)}
              style={{ color: i === activeStepIndex ? "#000000" : "#aaaaaa" }}
            >
              {step.title}
            </span>
            {i < steps.length - 1 && <span className="status-divider" />}
          </React.Fragment>
        ))}
      </div>
    )}
  </StepContext.Consumer>
);

const ActiveStep = () => (
  <StepContext.Consumer>
    {({ activeStepIndex, steps }) => {
      const activeStep = steps[activeStepIndex];
      return (
        <div className="step">
          <h2>{activeStep.title}</h2>
          <p>{activeStep.content}</p>
        </div>
      );
    }}
  </StepContext.Consumer>
);

export default class Stepper extends Component {
  static Status = StepperStatus;
  static Controls = StepperControls;
  static Next = StepperNext;
  static Previous = StepperPrevious;
  static ActiveStep = ActiveStep;
  state = {
    // Assume that the first step is always active at first.
    activeStepIndex: 0
  };

  findActiveStep = step => {
    return step.id === this.state.activeStepId;
  };

  stepForward = () => {
    this.setState(state => {
      return {
        activeStepIndex: state.activeStepIndex + 1
      };
    });
  };

  stepBack = () => {
    this.setState(state => {
      return {
        activeStepIndex: state.activeStepIndex - 1
      };
    });
  };

  goToIndex = index => {
    this.setState({ activeStepIndex: index });
  };

  getContext() {
    const { steps } = this.props;
    const { activeStepIndex } = this.state;
    const hasPrevious = activeStepIndex > 0;
    const hasNext = activeStepIndex < steps.length - 1;
    return {
      activeStepIndex: activeStepIndex,
      stepForward: this.stepForward,
      stepBack: this.stepBack,
      goToIndex: this.goToIndex,
      steps,
      hasNext,
      hasPrevious
    };
  }

  render() {
    return (
      <div className="stepper">
        <StepContext.Provider value={this.getContext()}>
          {this.props.children}
        </StepContext.Provider>
      </div>
    );
  }
}
