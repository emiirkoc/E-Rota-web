import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyD6Y3XE4CagjEakEljVsaoMEDqGK6ChBAw",

authDomain: "e-rotacom.firebaseapp.com",

projectId: "e-rotacom",

storageBucket: "e-rotacom.firebasestorage.app",

messagingSenderId: "611269242479",

appId: "1:611269242479:web:5e8cc27182e16783b1679a",

measurementId: "G-JJ54HZQ9Q6"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

console.log("FIREBASE BAĞLANDI");
