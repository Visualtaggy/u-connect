import React from "react";
import "./ServerPanel.css";
import { Avatar } from "@material-ui/core";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";

function ServerPanel() {
  return (
    <div className="serverPanel">
      <div className="server_profile">
        <Avatar src="https://avatars.githubusercontent.com/u/57157497?v=4" />
        <div className="server_profileinfo">
          <h3>visualtaggy</h3>
          <p>#1011</p>
        </div>
      </div>

      <div className="server_settings-icons">
        <SettingsRoundedIcon />
        <NotificationsRoundedIcon />
        <GroupRoundedIcon />
      </div>
    </div>
  );
}

export default ServerPanel;
