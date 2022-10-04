import React from "react";
import "./Online.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FlagIcon from "@mui/icons-material/Flag";
import { Avatar } from "@material-ui/core";

function Online() {
  return (
    <div className="online_toparea">
      <div className="interaction-area">
        <AlternateEmailIcon />
        <FlagIcon />
      </div>

      <div className="online_user-category">
        <div className="user-details">
          <h4>Moderators</h4>
          <p>3 Online</p>
        </div>
      </div>

      <div className="userlist_details">
        <div className="element-highlight">
          <Avatar src="https://www.pngkit.com/png/full/357-3577762_the-discord-bot-mee6-bot.png" />
          <div className="servericon">
            <h4>MEE6</h4>
          </div>
        </div>
      </div>
      <div className="userlist_details">
        <div className="element-highlight">
          <Avatar src="https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.koya.gg%2Futilities%2Favatar.png&w=256&q=75" />
          <div className="servericon">
            <h4>Koya</h4>
          </div>
        </div>
      </div>

      <div className="userlist_details">
        <div className="element-highlight">
          <Avatar src="https://top.gg/_next/image?url=https%3A%2F%2Fimages.discordapp.net%2Favatars%2F762320527637217312%2F8487f48b8139f72860e9d9c7bceea720.png%3Fsize%3D128&w=128&q=75" />
          <div className="servericon">
            <h4>Kosame</h4>
          </div>
        </div>
      </div>

      <div className="online_user-category">
        <div className="user-details">
          <h4>Newbies</h4>
          <p>0 Online</p>
        </div>
      </div>
    </div>
  );
}

export default Online;
