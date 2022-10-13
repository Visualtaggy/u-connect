import React, { useEffect, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelID, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from "firebase/compat/app";

function Chat() {
  const channelid = useSelector(selectChannelID);
  const user = useSelector(selectUser);
  const channelname = useSelector(selectChannelName);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (channelid) {
      db.collection("channels")
        .doc(channelid)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelid]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelid).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelname} />
      <div className="chat__messages">
        {messages.map((message) => {
          <Message />;
        })}
      </div>
      <div className="chat_input">
        <AddCircleIcon fontSize="large" />
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelname}`}
          />
          <button
            onClick={sendMessage}
            className="chatinput_area"
            type="submit"
          ></button>
        </form>

        <div className="chatinput_icons">
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
