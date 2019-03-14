import firebase from "firebase";

const config = {
  //instert firebase config
  apiKey: "AIzaSyDj7hWk-7HN1YBtYbLVWLO20gxvQMZgj-k",
  authDomain: "foodrecipes-548.firebaseapp.com",
  databaseURL: "https://foodrecipes-548.firebaseio.com",
  projectId: "foodrecipes-548",
  storageBucket: "foodrecipes-548.appspot.com",
  messagingSenderId: "1015555155791"
};

const fire = firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  "BBEyPBjo3-3hA_yfQVrIwWJcM_CA7scJkIVXjxC5LgmNnApzqi6dkGisXNgTI6fTG97mlCBVkz9AA13BQaxVPNA"
);
messaging
  .getToken()
  .then(currentToken => {
    console.log(currentToken);
  })
  .catch(err => {
    console.log(err);
  });

export default fire;
