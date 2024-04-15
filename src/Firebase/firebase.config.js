// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUgZW3bAMklpkxBIIMUoykjk-fG8OKu-E",
  authDomain: "mandela-estate.firebaseapp.com",
  projectId: "mandela-estate",
  storageBucket: "mandela-estate.appspot.com",
  messagingSenderId: "89154618545",
  appId: "1:89154618545:web:dbde10e6c91fd4cf99ce90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;