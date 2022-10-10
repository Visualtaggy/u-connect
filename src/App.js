import React, { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Navbar from "./Navbar";
import Online from "./Online";
import ServerPanel from "./ServerPanel";
import Login from "./Login";

import { useDispatch, useSelector } from "react-redux";
import { login, selectUser, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const dispath = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("current user is", authUser);
      if (authUser) {
        //Logged In User
        dispath(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //Logged Out User
      }
    });
  }, []);

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
