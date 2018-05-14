/**
 * ERROR BOUNDARY EXERCISE!
 *
 * We messed up, and pushed a bug to production thats causing
 * the entire application to crash. We really want to 1)
 * avoid crashing the app and b) report when an error happened.
 *
 * Implement a general ErrorBoundary component that can
 * wrap any other component to provide a...boundary for errors.
 *
 * It should look like this:
 *
 * <ErrorBoundary
 *   onError={(error, stack) => {...}}
 *   fallback={<SomeFallbackComponent />}
 *  />
 *   <ComponentThatProbablyCrashes />
 *  </ErrorBoundary>
 *
 *  Put it in src/ErrorBoundary.js and then wrap ChatMessage
 *  and ChatList, and any other component you want!
 *
 * STRETCH GOAL
 *
 * Implement a `withBoundary` higher-order-component that
 * takes a component, a fallback, and an error handler
 *
 * const SomeComponentWithBoundary = withErrorBoundary(
 *   SomeComponent,
 *   Fallback,
 *   (error, stack) => {...}
 * )
 */ 


import React, {Component} from 'react';
// Where our message data comes from.
import MessageDataSource from './MessageDataSource';
// Chat components!
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import ChatFilterNavbar from './ChatFilterNavbar';
import './App.css';

export default class App extends Component {
  state = {
    messages: [],
    pendingMessage: localStorage.getItem('pendingMessage'),
    messageFilter: '',
  };

  componentDidMount() {
    this._messageRequest = MessageDataSource.getData().then(
      messages => {
        this.setState({messages});
      },
    );
    this._unsubscribe = MessageDataSource.subscribe(
      this.onNewRemoteMessage,
    );
  }

  componentWillUnmount() {
    this._messageRequest.cancel();
    this._unsubscribe();
  }

  onChatInputChange = event => {
    this.setState({
      pendingMessage: event.target.value,
    });
  };

  onMessageFilterChange = messageFilter => {
    this.setState({messageFilter});
  };

  onNewRemoteMessage = message => {
    const {messages} = this.state;
    this.setState({
      messages: [...messages, message],
    });
  };

  onNewLocalMessage = () => {
    const {pendingMessage} = this.state;
    const message = {
      author: 'Me',
      message: pendingMessage,
      id: Math.random(),
    };
    this.onNewRemoteMessage(message);
    this.setState({
      pendingMessage: '',
    });
  };

  onScrollOffsetChange = offset => {
    // Noop
  };

  render() {
    const {
      messages,
      pendingMessage,
      messageFilter,
    } = this.state;

    return (
      <div className="App">
        <ChatFilterNavbar
          onFilterChange={this.onMessageFilterChange}
        />
        <div className="container">
          <ChatList
            onScrollOffsetChange={this.onScrollOffsetChange}
            filter={messageFilter}
            messages={messages}
          />
          <ChatInput
            onSubmit={this.onNewLocalMessage}
            onChange={this.onChatInputChange}
            value={pendingMessage}
          />
        </div>
      </div>
    );
  }
}
