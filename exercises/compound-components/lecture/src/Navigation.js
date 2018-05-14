import React, {Component} from 'react';
import cx from 'classnames';
import './App.css';


const NavigationItem = ({label, to, isActive }) => (
  <li
  className={cx({
    'nav-active': isActive,
  })}>
  <a href={item.to}>{item.label}</a>
</li>
)

  export default class Navigation extends React.Component {
  static Item = NavigationItem;
  // Pretend this is dynamic and must be read from state!
  state = {active: 'Home'};
  render() {
    const {children} = this.props;
    return (
      <ul className="nav" role="navigation">
        {children}
      </ul>
    );
  }
}
