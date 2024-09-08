// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBv33wcqlvshLdxukPHWCTXgvA2HBIhHzY",
  authDomain: "project-js-9e6d9.firebaseapp.com",
  projectId: "project-js-9e6d9",
  storageBucket: "project-js-9e6d9.appspot.com",
  messagingSenderId: "12456906342",
  appId: "1:12456906342:web:99533e85fc9948d2a727a7",
  measurementId: "G-K9TMHH2KLW"
};

// Initialize Firebase

const analytics = getAnalytics(app);