// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";




import { getAuth } from "firebase/auth";



// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaVsXVi_ttbxPBzRqXk1oWF1oG7HyaZak",
  authDomain: "elegant-collection.firebaseapp.com",
  projectId: "elegant-collection",
  storageBucket: "elegant-collection.appspot.com",
  messagingSenderId: "290400543126",
  appId: "1:290400543126:web:2ff1dd087c13c311ed3db7",
  measurementId: "G-4D390LT36Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)