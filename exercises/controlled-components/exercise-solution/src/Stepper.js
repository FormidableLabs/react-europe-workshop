// @format
import React, {Component} from 'react';

const StepContext = React.createContext();

const StepperPrevious = () => (
  <StepContext.Consumer>
    {({hasPrevious, stepBack}) => (
      <button
        className="step-btn"
        disabled={!hasPrevious}
        onClick={stepBack}>
        Previous
      </button>
    )}
  </StepContext.Consumer>
);

const StepperNext = () => (
  <StepContext.Consumer>
    {({hasNext, stepForward}) => (
      <button
        className="step-btn"
        disabled={!hasNext}
        onClick={stepForward}>
        Next
      </button>
    )}
  </StepContext.Consumer>
);

const StepperControls = () => (
  <React.Fragment>
    <StepperPrevious />
    <StepperNext />
  </React.Fragment>
);

const StepperStatus = () => (
  <StepContext.Consumer>
    {({steps, stepIndex, goToIndex}) => (
      <div className="stepper-status">
        {steps.map((step, i) => (
          <React.Fragment key={step.title}>
            <span
              className="status-item"
              onClick={() => goToIndex(i)}
              style={{
                color:
                  i === stepIndex ? '#000000' : '#aaaaaa',
              }}>
              {step.title}
            </span>
            {i < steps.length - 1 && (
              <span className="status-divider" />
            )}
          </React.Fragment>
        ))}
      </div>
    )}
  </StepContext.Consumer>
);

const ActiveStep = () => (
  <StepContext.Consumer>
    {({stepIndex, steps}) => {
      const activeStep = steps[stepIndex];
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

  findActiveStep = step => {
    return step.id === this.state.activeStepId;
  };

  stepForward = () => {
    const {onChange, stepIndex} = this.props;
    onChange(stepIndex + 1);
  };

  stepBack = () => {
    const {onChange, stepIndex} = this.props;
    onChange(stepIndex - 1);
  };

  goToIndex = index => {
    this.props.onChange(index);
  };

  getContext() {
    const {
      steps,
      stepIndex,
      canMoveBack,
      canMoveForward,
    } = this.props;
    return {
      stepIndex,
      stepForward: this.stepForward,
      stepBack: this.stepBack,
      goToIndex: this.goToIndex,
      steps,
      hasNext: canMoveForward(stepIndex),
      hasPrevious: canMoveBack(stepIndex),
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
