import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_2liFEZgBCgKAj7WcT4U5BIwgTl8qcTs",
  authDomain: "reactnative-firebase-780b3.firebaseapp.com",
  projectId: "reactnative-firebase-780b3",
  storageBucket: "reactnative-firebase-780b3.appspot.com",
  messagingSenderId: "761899013108",
  appId: "1:761899013108:web:a0887d789b20d02c085fa1",
};

const db = initializeApp(firebaseConfig);
export default db;
