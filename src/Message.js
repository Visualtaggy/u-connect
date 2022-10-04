import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message-details">
        <h4>
          visualtaggy
          <span className="timestamp">11:30pm</span>
        </h4>
        <p>This is a dummy message !</p>
      </div>
    </div>
  );
}

export default Message;
