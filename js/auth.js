console.log("AUTH ÇALIŞTI");

import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async () => {

    console.log("KAYIT TIKLANDI");

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try {

        const result =
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        console.log(result);

        alert("Kayıt başarılı 🎉");

    } catch(error){

        console.error(error);

        alert(error.code);

    }

});

loginBtn.addEventListener("click", async () => {

    console.log("GİRİŞ TIKLANDI");

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Giriş başarılı 🚗⚡");

    } catch(error){

        console.error(error);

        alert(error.code);

    }

});
