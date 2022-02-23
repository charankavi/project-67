import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   apiKey: "AIzaSyClhB18__IDGhBiv4Dyy9HVp071b3IIhjY",
  authDomain: "pro-6-65ef6.firebaseapp.com",
  databaseURL: "https://pro-6-65ef6-default-rtdb.firebaseio.com",
  projectId: "pro-6-65ef6",
  storageBucket: "pro-6-65ef6.appspot.com",
  messagingSenderId: "132593210617",
  appId: "1:132593210617:web:228a65073625dd5fad3e28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();