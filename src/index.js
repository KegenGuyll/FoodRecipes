import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./components/Login/login";
import fire from "./config/Fire";
import firebase from "firebase";
import * as serviceWorker from "./serviceWorker";

const messaging = firebase.messaging();
messaging
  .requestPermission()
  .then(data => {
    console.log(data);
    console.log("Notification Premisson Granted");
  })
  .catch(err => {
    console.log("Unable to get permission to notify.", err);
  });

fire.auth().onAuthStateChanged(user => {
  if (user) {
    ReactDOM.render(<App user={user} />, document.getElementById("root"));
  } else {
    ReactDOM.render(<Login />, document.getElementById("root"));
  }
});

serviceWorker.register();
