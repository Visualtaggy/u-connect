import React from "react";
import "./App.css";
import Chat from "./Chat";
import Navbar from "./Navbar";
import Online from "./Online";
import ServerPanel from "./ServerPanel";
import Login from "./Login";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <>
          <ServerPanel />

          <div className="main">
            {/* nav bar area*/}
            <Navbar />

            {/* chat area*/}
            <Chat />

            {/* online area*/}
            <Online />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
