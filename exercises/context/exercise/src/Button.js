import React from 'react';

import { Consumer } from './Context';
import { Consumer as NotificationConsumer } from './NotificationContext';

const Button = ({ children }) => (
  <NotificationConsumer>
    {({ add }) => {
      return (
        <Consumer>
          {({ primaryColor }) => (
            <button
              className="button"
              onClick={() => {
                add('OMG WE USE COOKIES AND HAVE TO TELL YOU LOL');
              }}
              style={{ backgroundColor: primaryColor }}
            >
              {children}
            </button>
          )}
        </Consumer>
      );
    }}
  </NotificationConsumer>
);

export default Button;
