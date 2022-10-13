import React from "react";
import "./NavbarChannel.css";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch } from "react-redux";
import { setChannelID, setChannelInfo } from "./features/appSlice";

function NavbarChannel({ id, channelName }) {
  const dispatch = useDispatch();

  return (
    <div
      className="navbarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelID: id,
            channelName: channelName,
          })
        )
      }
    >
      <div className="channel-highlight">
        <LanguageIcon />
        <h4>{channelName}</h4>
      </div>
    </div>
  );
}

export default NavbarChannel;
