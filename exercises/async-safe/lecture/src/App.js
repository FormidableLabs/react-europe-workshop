import React, { Component } from "react";
// Where our message data comes from.
import MessageDataSource from "./MessageDataSource";
// Chat components!
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";
import ChatFilterNavbar from "./ChatFilterNavbar";
import Spinner from "./Spinner";
import "./App.css";

export default class App extends Component {
  state = {
    loading: true,
    messages: [],
    pendingMessage: "",
    messageFilter: ""
  };

  componentWillMount() {
    this._messageRequest = MessageDataSource.getData().then(messages => {
      this.setState({ messages, loading: false });
    });
    this._unsubscribe = MessageDataSource.subscribe(this.onNewRemoteMessage);
    this.setState({
      pendingMessage: localStorage.getItem("pendingMessage")
    });
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
    const { loading, messages, pendingMessage, messageFilter } = this.state;
    // Render a spinner while we wait for our
    // initial data
    if (loading) {
      return <Spinner />;
    }
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
