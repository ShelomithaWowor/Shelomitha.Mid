// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtCjAXjFdhNNqp5qD3yZ_5vX96DGFbtKU",
  authDomain: "project-mid-fb875.firebaseapp.com",
  databaseURL: "https://project-mid-fb875-default-rtdb.firebaseio.com",
  projectId: "project-mid-fb875",
  storageBucket: "project-mid-fb875.firebasestorage.app",
  messagingSenderId: "290758303278",
  appId: "1:290758303278:web:e9a0fef8da304b749509bf",
  measurementId: "G-QV10TZNPEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


