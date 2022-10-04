import React from "react";
import "./Online.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FlagIcon from "@mui/icons-material/Flag";

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
    </div>
  );
}

export default Online;
