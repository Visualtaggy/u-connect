import React from "react";
import "./ServerPanel.css";
import { Avatar } from "@material-ui/core";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import db, { auth } from "./firebase";
import Popup from "./Popup";
import { useState } from "react";

function ServerPanel() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  function displayPopup(params) {
    setButtonPopup(true);
  }
  const addChannel = () => {
    const channelName = input;

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
      setInput("");
    }
  };
  return (
    <div className="serverPanel">
      <div className="server_profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="server_profileinfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
      </div>

      <div className="server_settings-icons">
        <SettingsRoundedIcon />
        <NotificationsRoundedIcon />
        <GroupRoundedIcon />
        <div className="pipe">|</div>
      </div>

      <div className="servercontrols">
        <div className="icon">
          <ExploreIcon fontSize="large" className="icon-bg" />
          <AddCircleIcon
            onClick={function (event) {
              displayPopup();
            }}
            fontSize="large"
            className="icon-bg"
          />
        </div>
      </div>

      <div className="serverlist">
        <div className="serverdetails">
          <div className="element-highlight">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-rbuynVJLw2NkD37YF9nqIJLkrKusAUWJg&usqp=CAU" />
            <div className="servericon">
              <h4>Cyberpunk 2077</h4>
              <p>32 Online</p>
            </div>
          </div>
        </div>

        <div className="serverdetails">
          <div className="element-highlight">
            <Avatar src="https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg" />
            <div className="servericon">
              <h4>Valorant</h4>
              <p>11297 Online</p>
            </div>
          </div>
        </div>

        <div className="serverdetails">
          <div className="element-highlight">
            <Avatar src="https://c4.wallpaperflare.com/wallpaper/563/416/847/call-of-duty-call-of-duty-black-ops-iii-call-of-duty-black-ops-iii-logo-wallpaper-preview.jpg" />
            <div className="servericon">
              <h4>Call of Duty</h4>
              <p>2525 Online</p>
            </div>
          </div>
        </div>

        <div className="serverdetails">
          <div className="element-highlight">
            <Avatar src="https://static.displate.com/280x392/displate/2021-11-23/258bd99c4dba3d7711e4884b8d8a3fda_c678608d980c649549e5f0c07dc50f8e.jpg" />
            <div className="servericon">
              <h4>Assassin's Creed</h4>
              <p>666 Online</p>
            </div>
          </div>
        </div>

        <div className="serverdetails">
          <div className="element-highlight">
            <Avatar src="https://i.pinimg.com/originals/9a/77/db/9a77db0d3793bb8c4170658776d948c8.jpg" />
            <div className="servericon">
              <h4>Grand Theft Auto</h4>
              <p>10692 Online</p>
            </div>
          </div>
        </div>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h2>Create Channel</h2>
          <p>in text channel</p>
          <h3>CHANNEL NAME</h3>
          <div className="channel-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`new-channel`}
            />
          </div>
          <div className="create-btn">
            <button onClick={addChannel}>Create Channel</button>
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default ServerPanel;
