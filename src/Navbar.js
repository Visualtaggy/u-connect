import React from "react";
import "./Navbar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavbarChannel from "./NavbarChannel";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_top-area">
        <h3>Oldest Home</h3>
        <ExpandMoreIcon />
      </div>

      <div className="navbar_all-channels">
        <div className="all-channels-header">
          <div className="navbar_header">
            <h4>General</h4>
            <ExpandMoreIcon />
          </div>
        </div>
      </div>

      <div className="navbar_channels-list">
        <NavbarChannel />
      </div>
    </div>
  );
}

export default Navbar;
