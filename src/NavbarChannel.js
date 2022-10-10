import React from "react";
import "./NavbarChannel.css";
import LanguageIcon from "@mui/icons-material/Language";

function NavbarChannel({ id, channelName }) {
  return (
    <div className="navbarChannel">
      <div className="channel-highlight">
        <LanguageIcon />
        <h4>{channelName}</h4>
      </div>
    </div>
  );
}

export default NavbarChannel;
