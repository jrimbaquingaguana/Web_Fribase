import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDspa1WpBPE8zTc-7ujYaGg2RunJsB0Fv8",
  authDomain: "deber-firebase-b1a18.firebaseapp.com",
  projectId: "deber-firebase-b1a18",
  storageBucket: "deber-firebase-b1a18.appspot.com",
  messagingSenderId: "673388433180",
  appId: "1:673388433180:web:a69e3d5400394ce1ac34d9",
  measurementId: "G-M5CSXZV2WN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
