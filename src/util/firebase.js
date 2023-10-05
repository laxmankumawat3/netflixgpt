// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6aDcRoa7Uo_CdL3pF8oFYTbuKpizpd4o",
  authDomain: "netlifixgpt.firebaseapp.com",
  projectId: "netlifixgpt",
  storageBucket: "netlifixgpt.appspot.com",
  messagingSenderId: "775264805748",
  appId: "1:775264805748:web:59702df5714a813bcdc221",
  measurementId: "G-E35ESSK5LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);
const analytics = getAnalytics(app);