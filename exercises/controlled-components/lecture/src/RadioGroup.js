// @format
import React, { Component } from "react";
import "./App.css";

const RadioGroupOption = ({ value, label }) => (
  <div className="radio-group-item">
    <input id={value} name="form" type="radio" value={value} />
    <label htmlFor={value}>{label || value}</label>
  </div>
);

export default class RadioGroup extends Component {
  static Option = RadioGroupOption;

  render() {
    const { children } = this.props;
    return <fieldset className="radio-group">{children}</fieldset>;
  }
}
