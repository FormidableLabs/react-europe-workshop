import React from 'react';

import { Consumer } from './Context';

const Header = ({ children }) => (
  <Consumer>
    {({ primaryColor }) => (
      <div className="header" style={{ backgroundColor: primaryColor }}>
        {children}
      </div>
    )}
  </Consumer>
);

export default Header;
