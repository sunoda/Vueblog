// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
// require("firebase/auth"); 暫時不用
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDAQ6dUrsUPOnB2M9fDcYndXXXEWuwPowA",
  authDomain: "sunodalog.firebaseapp.com",
  databaseURL: "https://sunodalog.firebaseio.com",
  projectId: "sunodalog",
  storageBucket: "sunodalog.appspot.com",
  messagingSenderId: "677754735875",
  appId: "1:677754735875:web:459198ba6c1433729f2d36",
  measurementId: "G-RB9Z43V1E4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

export { db };
