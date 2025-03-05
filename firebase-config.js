
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBe3Px01PtIzeT04OvRS39cIaxwAJtS6mM",
    authDomain: "chat-app-c0f35.firebaseapp.com",
    projectId: "chat-app-c0f35",
    storageBucket: "chat-app-c0f35.firebasestorage.app",
    messagingSenderId: "349049421287",
    appId: "1:349049421287:web:6dfcbb3bc55b6e00635142",
    measurementId: "G-0D5NRC95WW"
  };


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();