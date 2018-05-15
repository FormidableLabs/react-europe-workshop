import React from 'react';

import { Consumer } from './Context';
import { Consumer as NotificationConsumer } from './NotificationContext';

const Notification = ({ children }) => (
  <NotificationConsumer>
    {({ remove, idx }) => {
      return (
        <Consumer>
          {({ primaryColor }) => (
            <div
              className="notification"
              style={{ backgroundColor: 'black', color: primaryColor }}
            >
              {children}
              <span
                style={{ float: 'right', color: 'white', fontSize: 18 }}
                onClick={() => {
                  remove(idx);
                }}
              >
                X
              </span>
            </div>
          )}
        </Consumer>
      );
    }}
  </NotificationConsumer>
);

export default Notification;
