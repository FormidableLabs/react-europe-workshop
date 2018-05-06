import React, { Component } from "react";

export default class Stepper extends Component {
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

  render() {
    const { steps } = this.props;
    const { activeStepIndex } = this.state;
    const activeStep = steps[activeStepIndex];
    const hasPrevious = activeStepIndex > 0;
    const hasNext = activeStepIndex < steps.length - 1;
    return (
      <div className="stepper">
        <div className="stepper-status">
          {steps.map((step, i) => (
            <React.Fragment>
              <span
                className="status-item"
                onClick={() =>
                  this.setState({
                    activeStepIndex: i
                  })
                }
                style={{ color: i === activeStepIndex ? "#000000" : "#aaaaaa" }}
              >
                {step.title}
              </span>
              {i < steps.length - 1 && <span className="status-divider" />}
            </React.Fragment>
          ))}
        </div>
        <div className="step">
          <h2>{activeStep.title}</h2>
          <p>{activeStep.content}</p>
          <div>
            <button
              className="step-btn"
              disabled={!hasPrevious}
              onClick={this.stepBack}
            >
              Previous
            </button>
            <button
              className="step-btn"
              disabled={!hasNext}
              onClick={this.stepForward}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
