import React from "react";
import "./Navbar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Nav bar</h2>

      <div className="navbar_top-area">
        <h3>Oldest Home</h3>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}

export default Navbar;
