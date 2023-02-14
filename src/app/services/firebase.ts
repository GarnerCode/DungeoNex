// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuYdMW-IxWQdndRyk3u0_8BDnaLGkeWfU",
  authDomain: "dungeonex-90e02.firebaseapp.com",
  projectId: "dungeonex-90e02",
  storageBucket: "dungeonex-90e02.appspot.com",
  messagingSenderId: "1047314674672",
  appId: "1:1047314674672:web:a9b7188210b27d57e2e335",
  measurementId: "G-FBZ770CGN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);