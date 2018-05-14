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

  // Async requests and subscriptions should be setup
  // in componentDidMount.
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
    // Cancel the message request
    this._messageRequest.cancel();
    // Unsubscribe from new messages
    this._unsubscribe();
  }

  // Tracks the message that the user is
  onChatInputChange = event => {
    this.setState({
      // currently typing in the ChatInput.
      pendingMessage: event.target.value,
    });
  };

  // Tracks the filter the user is applying
  onMessageFilterChange = messageFilter => {
    this.setState({messageFilter});
  };

  // Called when a "remote" message comes in.
  // i.e., when we get a push from our "server".
  // These are messages from other people.
  onNewRemoteMessage = message => {
    const {messages} = this.state;
    this.setState({
      messages: [...messages, message],
    });
  };

  // Called when a "local" message is added.
  // These are the messages the user is sending
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
      error,
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
