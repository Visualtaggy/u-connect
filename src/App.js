import React from "react";
import "./App.css";
import Chat from "./Chat";
import Navbar from "./Navbar";
import Online from "./Online";
import ServerPanel from "./ServerPanel";

function App() {
  return (
    <div className="app">
      <ServerPanel />

      <div className="main">
        {/* nav bar area*/}
        <Navbar />

        {/* chat area*/}
        <Chat />

        {/* online area*/}
        <Online />
      </div>
    </div>
  );
}

export default App;
