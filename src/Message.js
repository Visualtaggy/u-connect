import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message_info">
        <h4>
          visualtaggy
          <span className="message_timestamps">timestamp goes here</span>
        </h4>

        <p>Message content goes here</p>
      </div>
    </div>
  );
}

export default Message;
