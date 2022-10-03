import React from "react";
import "./NavbarVoiceChannel.css";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

function NavbarVoiceChannel() {
  return (
    <div className="navbarVoiceChannel">
      <div className="channel-highlight">
        <VolumeUpIcon />
        <h4>Voice Chat</h4>
      </div>
    </div>
  );
}

export default NavbarVoiceChannel;
