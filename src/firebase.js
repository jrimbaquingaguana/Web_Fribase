import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEgI-BJ5sM19stFtFtQvS4WwIo4oNrIU4",
  authDomain: "p2parcial.firebaseapp.com",
  projectId: "p2parcial",
  storageBucket: "p2parcial.appspot.com",
  messagingSenderId: "679178906258",
  appId: "1:679178906258:web:566528c23a5bed3d3f944b",
  measurementId: "G-JSPNEG4ESW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
