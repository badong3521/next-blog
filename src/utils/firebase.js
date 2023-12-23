// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-nextjs-1df3f.firebaseapp.com",
  projectId: "blog-nextjs-1df3f",
  storageBucket: "blog-nextjs-1df3f.appspot.com",
  messagingSenderId: "209646402236",
  appId: "1:209646402236:web:c98643f3d8efdbc94c2eb9",
  measurementId: "G-541SNBHZV4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
