/**
 * ASYNC-SAFE PATTERNS EXERCISE
 *
 * This app uses a number of patterns that are
 * unsafe with async rendering. Your mission,
 * should you choose to accept it, is to go
 * through and fix these issues using async-safe
 * patterns and APIs.
 *
 * The problematic parts are marked with a big
 * FIX ME comment and explanation above them.
 *
 * The files you should look at are:
 *
 *   1. This one (App.js)
 *   2. ChatList.js
 *   3. ChatInput
 */

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
    /**
     * FIX ME
     *
     * componentWillMount is a "render" phase lifecycle
     * method, which means that it may get called
     * multiple times for a single update. This can
     * lead to this async request being called many
     * times, which can waste data and time.
     *
     * Move this into the "commit" phase lifecycle
     * method that gets called when a component
     * mounts.
     */
    this._messageRequest = MessageDataSource.getData().then(messages => {
      this.setState({ messages, loading: false });
    });
    /**
     * FIX ME
     *
     * Creating subscriptions in a render phase
     * lifecycle is unsafe, and may lead to memory
     * leaks.
     *
     * Move this into the "commit" phase lifecycle
     * method that gets called when a component
     * mounts.
     *
     * STRETCH GOAL
     *
     * Check out the create-subscription package.
     * Can you implement a version of this using
     * that package? (its already installed)
     */
    this._unsubscribe = MessageDataSource.subscribe(this.onNewRemoteMessage);
    /**
     * FIX ME
     *
     * There's no reason to initialize state values
     * int componentWillMount. Move this to where
     * this.state is initialized.
     *
     */
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
