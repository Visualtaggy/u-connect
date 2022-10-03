import React from "react";
import "./ServerPanel.css";
import { Avatar } from "@material-ui/core";

function ServerPanel() {
  return (
    <div className="serverPanel">
      <div className="server_profile">
        <Avatar />
        <div className="server_profileinfo">
          <h3>visualtaggy</h3>
          <p>#1011</p>
        </div>
      </div>
    </div>
  );
}

export default ServerPanel;
