import React from "react";
import "./NavbarChannel.css";
import LanguageIcon from "@mui/icons-material/Language";

function NavbarChannel(id, channel) {
  return (
    <div className="navbarChannel">
      <div className="channel-highlight">
        <LanguageIcon />
        <h4>General</h4>
      </div>
    </div>
  );
}

export default NavbarChannel;
