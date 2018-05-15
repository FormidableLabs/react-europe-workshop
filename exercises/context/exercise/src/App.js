import React, { Component } from 'react';

import Header from './Header';
import Heading from './Heading';
import Button from './Button';
import Notification from './Notification';

import { Provider } from './Context';
import { Provider as NotificationProvider } from './NotificationContext';

class App extends Component {
  state = {
    notifications: [],
  };
  addNotification = n => {
    let notes = [...this.state.notifications];
    notes.push(n);
    this.setState({
      notifications: notes,
    });
  };
  removeNotification = idx => {
    let notes = [...this.state.notifications];
    notes.splice(idx, 1);
    this.setState({
      notifications: notes,
    });
  };
  contextValue = {
    add: this.addNotification,
    remove: this.removeNotification,
  };
  render() {
    return (
      <NotificationProvider value={this.contextValue}>
        <Provider value={{ primaryColor: '#fd79a8' }}>
          <div>
            {this.state.notifications.map((n, idx) => (
              <Notification idx={idx}>{n}</Notification>
            ))}
            <Header>BAD WEBSITE</Header>
            <div style={{ padding: 20 }}>
              <Heading>Bad Content</Heading>
              <p>This is a terrible website. It's disgustingly bad.</p>
              <Button>NOTIFY</Button>
            </div>
          </div>
        </Provider>
      </NotificationProvider>
    );
  }
}

export default App;
