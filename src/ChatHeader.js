import React from "react";
import "./ChatHeader.css";

function ChatHeader({ channelName }) {
  return (
    <div className="chatheader">
      <h3>{channelName}</h3>
      <div className="pipe">|</div>
      <h4>
        Everyone should be familiar with this world,It's the one that always
        appeared on Control's main-menu, blurred and slowly rotating around.
      </h4>
    </div>
  );
}

export default ChatHeader;
