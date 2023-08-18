import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD220RFh8_BzglxNWJxrIVXA6rYWCMZGlc",
  authDomain: "pening-ccd95.firebaseapp.com",
  projectId: "pening-ccd95",
  storageBucket: "pening-ccd95.appspot.com",
  messagingSenderId: "891543998079",
  appId: "1:891543998079:web:cd2736f9cc8cec8f64f94a",
  measurementId: "G-ZL98DZT25P",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { firebaseApp, db, analytics };
