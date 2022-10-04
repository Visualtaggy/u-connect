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
    </div>
  );
}

export default Online;
