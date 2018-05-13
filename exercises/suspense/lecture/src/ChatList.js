import React, { Component } from "react";
import ChatMessage from "./ChatMessage";

export default class ChatList extends Component {
  listRef = null;
  scrollOffset = null;

  // Deriving state from props should be done
  // using getDerivedStateFromProps. Note that we now
  // have to mirror a few values in state that we didn't
  // have to before.
  static getDerivedStateFromProps(nextProps, prevState) {
    // If the filter or messages hasn't changed,
    // return null to signal that there's no state
    // update.
    if (
      nextProps.filter === prevState.filter &&
      nextProps.messages === prevState.messages
    ) {
      return null;
    }
    const { filter, messages } = nextProps;
    return {
      filter,
      messages,
      filteredMessages: filter
        ? filterMessages(messages, filter)
        : prevState.filteredMessages
    };
  }

  state = {
    filter: this.props.filter,
    messages: this.props.messages,
    // Derive state when it's initialized
    filteredMessages: this.props.filter
      ? filterMessages(this.props.messages)
      : []
  };

  // Use getSnapshotBeforeUpdate to read values from the
  // DOM before an update.
  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.messages.length < this.props.messages.length) {
      const { scrollHeight, scrollTop, offsetHeight } = this.listRef;
      const offset = scrollHeight - offsetHeight;
      return scrollTop - offset;
    }
    return null;
  }

  // ...and then use componentDidUpdate to apply the value
  // returned from getSnapshotBeforeUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    // If a snapshot exists, it messages must have updated.
    // Check to see if we need to update the offset.
    if (snapshot !== null) {
      // Only update the scroll position if the offset
      // was zero.
      if (snapshot === 0) {
        const { scrollHeight } = this.listRef;
        this.scrollOffset = null;
        this.listRef.scrollTop = scrollHeight;
      }
      // Call external callback when the component has updated
      this.props.onScrollOffsetChange(snapshot);
    }
  }

  render() {
    const { filteredMessages } = this.state;
    const { messages, filter } = this.props;
    const activeMessages = filter ? filteredMessages : messages;
    return (
      <div
        ref={ref => (this.listRef = ref)}
        className="list-group list-group-flush"
      >
        {activeMessages.map(message => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </div>
    );
  }
}

// A small utility method for applying a filter.
function filterMessages(messages, filter) {
  return messages.filter(({ message }) => {
    const haystack = message.toLowerCase();
    const needle = filter.toLowerCase();
    return haystack.includes(needle);
  });
}
