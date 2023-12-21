// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdjLXM2PJQNJSk9YGu3U5wyaTK-J_cHVA",
  authDomain: "test-504b9.firebaseapp.com",
  projectId: "test-504b9",
  storageBucket: "test-504b9.appspot.com",
  messagingSenderId: "323680249423",
  appId: "1:323680249423:web:964b74f7e7cd917bde6c3a",
  measurementId: "G-C9EG9HMYWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);