import React from 'react';

import { Consumer } from './NotificationContext';
import { Consumer as ThemeConsumer } from './ThemeContext';

import './Notification.css';

export default class Notification extends React.Component {
  render() {
    return (
      <Consumer>
        {({ removeNotification }) => (
          <ThemeConsumer>
            {({ color }) => (
              <div
                className="notification"
                style={{ backgroundColor: 'black', color: color }}
              >
                {this.props.children}
                <span style={{ float: 'right' }} onClick={removeNotification}>
                  X
                </span>
              </div>
            )}
          </ThemeConsumer>
        )}
      </Consumer>
    );
  }
}
