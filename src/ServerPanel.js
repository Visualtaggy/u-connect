import React from "react";
import "./ServerPanel.css";
import { Avatar } from "@material-ui/core";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExploreIcon from "@mui/icons-material/Explore";

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
        <div className="pipe">|</div>
      </div>

      <div className="servercontrols">
        <div className="icon">
          <ExploreIcon fontSize="large" className="icon-bg" />
          <AddCircleIcon fontSize="large" className="icon-bg" />
        </div>
      </div>

      <div className="serverlist">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-rbuynVJLw2NkD37YF9nqIJLkrKusAUWJg&usqp=CAU" />
        <div className="servericon">
          <h4>Cyberpunk 2077</h4>
          <p>32 Online</p>
        </div>
      </div>
    </div>
  );
}

export default ServerPanel;
