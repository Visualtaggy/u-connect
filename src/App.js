import React from "react";
import "./App.css";
import Chat from "./Chat";
import Navbar from "./Navbar";
import Online from "./Online";

function App() {
  return (
    <div className="app">
      {/* <h1>PlaceHolder</h1> */}

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
