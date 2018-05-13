import React, { Component } from "react";
import { createResource } from "simple-cache-provider";
import MessageDataSource, { cache } from "./MessageDataSource";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";
import ChatFilterNavbar from "./ChatFilterNavbar";
import "./App.css";

// window.API_DELAY = 100;

const Messages = createResource(MessageDataSource.getData);

export default class App extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.loading) {
      const messages = Messages.read(cache);
      return { messages, loading: false };
    }
    return null;
  }

  state = {
    loading: true,
    messages: [],
    pendingMessage: localStorage.getItem("pendingMessage"),
    messageFilter: ""
  };

  // Async requests and subscriptions should be setup
  // in componentDidMount.
  componentDidMount() {
    this._messageRequest = MessageDataSource.getData().then(messages => {
      this.setState({ messages, loading: false });
    });
    this._unsubscribe = MessageDataSource.subscribe(this.onNewRemoteMessage);
  }

  componentWillUnmount() {
    // Cancel the message request
    this._messageRequest.cancel();
    // Unsubscribe from new messages
    this._unsubscribe();
  }

  // Tracks the message that the user is
  // currently typing in the ChatInput.
  onChatInputChange = event => {
    this.setState({
      pendingMessage: event.target.value
    });
  };

  // Tracks the filter the user is applying
  onMessageFilterChange = messageFilter => {
    this.setState({ messageFilter });
  };

  // Called when a "remote" message comes in.
  // i.e., when we get a push from our "server".
  // These are messages from other people.
  onNewRemoteMessage = message => {
    console.log(message);
    const { messages } = this.state;
    this.setState({
      messages: [...messages, message]
    });
  };

  // Called when a "local" message is added.
  // These are the messages the user is sending
  onNewLocalMessage = () => {
    const { pendingMessage } = this.state;
    const message = {
      author: "Me",
      message: pendingMessage,
      id: Math.random()
    };
    this.onNewRemoteMessage(message);
    this.setState({
      pendingMessage: ""
    });
  };

  // Called when the scroll offset is calculated
  // for the ChatList.
  onScrollOffsetChange = offset => {
    // One day we might like to make some
    // optimizations when we know the user
    // isn't looking at the latest messages...
    console.log(`Scroll offset: ${offset}px`);
  };

  render() {
    const { pendingMessage, messageFilter, messages } = this.state;
    return (
      <div className="App">
        <ChatFilterNavbar onFilterChange={this.onMessageFilterChange} />
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
