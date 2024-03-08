import { initializeApp } from "firebase";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { 
  apiKey: "AIzaSyCtGMirJC8hbXMV4Vq1rPXWZD4ypraoD5c",
  authDomain: "sk-system-93a60.firebaseapp.com",
  projectId: "sk-system-93a60",
  storageBucket: "sk-system-93a60.appspot.com",
  messagingSenderId: "505672121930",
  appId: "1:505672121930:web:50cba81dc7406fbcdc30b3" 
};

/* 
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:  process.env.REACT_APP_AUTH_DOM,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID 
*/

// Initialize Firebase
const Aplication__ = initializeApp(firebaseConfig);
const db = getFirestore(Aplication__)

export default { Aplication__, db }