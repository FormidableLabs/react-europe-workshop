import React from 'react';

import { Consumer } from './ThemeContext';

import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <Consumer>
        {({ color }) => (
          <div className="header" style={{ backgroundColor: color }}>
            {this.props.children}
          </div>
        )}
      </Consumer>
    );
  }
}
