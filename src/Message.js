import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
function Message({ timestamp, user, message }) {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message_info">
        <h4>
          {user.displayName}
          <span className="message_timestamps">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
