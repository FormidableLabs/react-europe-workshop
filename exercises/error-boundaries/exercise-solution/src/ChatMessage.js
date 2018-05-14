import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const ChatMessage = ({author, message}) => (
  <div className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5
        style={{
          // HOPE THIS WORKS!
          color:
            author === 'Me' ? message.color.rgb : undefined,
        }}
        className="mb-1">
        {author}
      </h5>
    </div>
    <p className="mb-1">{message}</p>
  </div>
);

const ChatErrorMessage = () => (
  <div className="list-group-item list-group-item-action flex-column align-items-start">
    Unable to display this message :(
  </div>
);

export default props => (
  <ErrorBoundary Fallback={ChatErrorMessage}>
    <ChatMessage {...props} />
  </ErrorBoundary>
);
