import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNPETAvDmZWNAVI71UI40cih0ttctpXfg",
  authDomain: "codepath-assesement.firebaseapp.com",
  projectId: "codepath-assesement",
  storageBucket: "codepath-assesement.appspot.com",
  messagingSenderId: "323183368403",
  appId: "1:323183368403:web:d5e0179b0d3866f81ddc26",
  measurementId: "G-6S046YKNQR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
