import React from "react";
import "./App.css";
import Chat from "./Chat";
import Navbar from "./Navbar";
import Online from "./Online";
import ServerPanel from "./ServerPanel";
import Login from "./Login";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
       //Logged In User 
      }
      else{
        //Logged Out User

      }
    })
  }, 
  [user]);

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
