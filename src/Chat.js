import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelID, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";

function Chat() {
  const channelid = useSelector(selectChannelID);
  const user = useSelector(selectUser);
  const channelname = useSelector(selectChannelName);

  return (
    <div className="chat">
      <ChatHeader channelName={channelname}/>
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat_input">
        <AddCircleIcon fontSize="large" />
        <form action="">
          <input placeholder="Message #General" />
          <button className="chatinput_area" type="submit"></button>
        </form>

        <div className="chatinput_icons">
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
