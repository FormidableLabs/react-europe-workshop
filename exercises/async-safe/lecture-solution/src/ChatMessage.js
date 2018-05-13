import React from "react";

const ChatMessage = ({ author, message }) => (
  <div className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5
        style={{
          color: author === "Me" ? "coral" : undefined
        }}
        className="mb-1"
      >
        {author}
      </h5>
      {/* <small>3 days ago</small> */}
    </div>
    <p className="mb-1">{message}</p>
  </div>
);

export default ChatMessage;
