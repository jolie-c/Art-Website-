
const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQYbPMq8zhq-EHBSoco1WYMFZzaSDaXIg",
  authDomain: "artshowcase2022.firebaseapp.com",
  databaseURL: "https://artshowcase2022-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "artshowcase2022",
  storageBucket: "artshowcase2022.appspot.com",
  messagingSenderId: "456912519082",
  appId: "1:456912519082:web:4dbab655f27bafb4b075d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
