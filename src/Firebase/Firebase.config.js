// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRDALcu_uwimefYDQGfWezclea55nKCpM",
  authDomain: "yoga-own-design-project.firebaseapp.com",
  projectId: "yoga-own-design-project",
  storageBucket: "yoga-own-design-project.appspot.com",
  messagingSenderId: "446380978290",
  appId: "1:446380978290:web:8eb2b8996477a91575d2eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;