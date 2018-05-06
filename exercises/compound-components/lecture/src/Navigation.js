import React, { Component } from "react";
import cx from "classnames";
import "./App.css";

export default class Navigation extends React.Component {
  // Pretend this is dynamic and must be read from state! 
  state = { active: "Home" };
  render() {
    const { items } = this.props;
    return (
      <ul className="nav" role="navigation">
        {items.map(item => (
          <li
            className={cx({ "nav-active": this.state.active === item.label })}
          >
            <a href={item.to}>{item.label}</a>
          </li>
        ))}
      </ul>
    );
  }
}
