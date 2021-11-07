import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREVBASE_API_KEY,
  authDomain: "enhanced-bonito-317811.firebaseapp.com",
  projectId: "enhanced-bonito-317811",
  storageBucket: "enhanced-bonito-317811.appspot.com",
  messagingSenderId: "918619842297",
  appId: "1:918619842297:web:4c311046ab34b8548ca428",
  measurementId: "G-88BY5J02P7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
