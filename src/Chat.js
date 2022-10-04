import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat_messages">{/* chat pop up goes here  */}</div>

      <div className="chat_input">
        <AddCircleIcon fontSize="large" />
        <form action="">
          <input placeholder="Message #General" />
          <button className="chatinput_area" type="submit">
            Send Message
          </button>
        </form>

        <div className="chatinput_icons">
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
