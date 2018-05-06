import React, { Component } from "react";
import cx from "classnames";
import "./App.css";

const NavigationContext = React.createContext(null);

const NavigationItem = ({ label, to }) => (
  <NavigationContext.Consumer>
    {activeItem => (
      <li
        className={cx({
          "nav-active": activeItem === label
        })}
      >
        <a href={to}>{label}</a>
      </li>
    )}
  </NavigationContext.Consumer>
);

const NavigationSplit = () => <li className="nav-split" />;

export default class Navigation extends React.Component {
  static Item = NavigationItem;
  static Split = NavigationSplit;
  // We're storing this in state for now, even though it's static.
  // We'll look at making this dynamic later!
  state = { active: "Home" };
  render() {
    const { children } = this.props;
    const { active } = this.state;
    return (
      <ul className="nav" role="navigation">
        <NavigationContext.Provider value={this.state.active}>
          {children}
        </NavigationContext.Provider>
      </ul>
    );
  }
}
