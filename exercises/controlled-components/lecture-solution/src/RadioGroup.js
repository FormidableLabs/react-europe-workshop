// @format
import React, { Component } from "react";
import memoize from "memoize-one";
import "./App.css";

const RadioContext = React.createContext();

const RadioGroupOption = ({ value, label }) => (
  <div className="radio-group-item">
    <RadioContext>
      {context => (
        <input
          id={value}
          name="form"
          type="radio"
          onChange={context.onChange}
          checked={context.value === value}
          value={value}
        />
      )}
    </RadioContext>
    <label htmlFor={value}>{label || value}</label>
  </div>
);

export default class RadioGroup extends Component {
  static Option = RadioGroupOption;

  onChange = event => {
    this.props.onChange(event.target.value);
  };

  getContext = memoize(value => {
    return {
      value,
      onChange: this.onChange
    };
  });

  render() {
    const { children, value } = this.props;
    const context = this.getContext(value);
    return (
      <RadioContext.Provider value={context}>
        <fieldset className="radio-group">{children}</fieldset>
      </RadioContext.Provider>
    );
  }
}
