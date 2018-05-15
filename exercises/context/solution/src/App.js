import React, { Component } from 'react';

import './App.css';

import { Provider } from './NotificationContext';
import Header from './Header';
import Notification from './Notification';
import Button from './Button';

class App extends Component {
  state = {
    notification: null,
  };
  addNotification = n => {
    this.setState({
      notification: n,
    });
  };
  removeNotification = () => {
    this.setState({
      notification: null,
    });
  };
  contextValue = {
    addNotification: this.addNotification,
    removeNotification: this.removeNotification,
  };
  render() {
    return (
      <Provider value={this.contextValue}>
        <div className="container">
          {this.state.notification && (
            <Notification>{this.state.notification}</Notification>
          )}
          <Header>Context Demo</Header>
          <Button>Notify!</Button>
        </div>
      </Provider>
    );
  }
}

export default App;
