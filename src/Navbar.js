import React, { useEffect, useState } from "react";
import "./Navbar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavbarChannel from "./NavbarChannel";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NavbarVoiceChannel from "./NavbarVoiceChannel";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
function Navbar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="navbar">
      <div className="navbar_top-area">
        <h3>Oldest Home</h3>
        <ExpandMoreIcon />
      </div>

      <div className="navbar_banner">
        <img
          src="https://cdn.donmai.us/original/57/c2/__jesse_faden_control_drawn_by_kousfield__57c254123e8219ceb4773ca31ec54706.jpg"
          alt=""
        />
      </div>

      <div className="search_container">
        <SearchRoundedIcon />
        <input placeholder="Search" />
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
        {channels.map(({ id, channel }) => (
          <NavbarChannel key={id} id={id} channelName={channel.channelName} />
        ))}
      </div>

      <br />

      <div className="navbar_all-channels">
        <div className="all-channels-header">
          <div className="navbar_header">
            <h4>Voice Chat</h4>
            <ExpandMoreIcon />
          </div>
        </div>
      </div>

      <div className="navbar_channels-list">
        <NavbarVoiceChannel />
      </div>
    </div>
  );
}

export default Navbar;
