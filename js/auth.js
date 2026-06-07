import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

// KAYIT OL
registerBtn.addEventListener("click", async () => {

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert("E-posta ve şifre giriniz.");
        return;
    }

    try {

        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Kayıt başarılı 🎉");

    } catch (error) {

        console.error(error);

        alert("Hata: " + error.message);

    }

});

// GİRİŞ YAP
loginBtn.addEventListener("click", async () => {

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert("E-posta ve şifre giriniz.");
        return;
    }

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Giriş başarılı 🚗⚡");

    } catch (error) {

        console.error(error);

        alert("Giriş başarısız: " + error.message);

    }

});

// OTURUM TAKİBİ
onAuthStateChanged(auth, (user) => {

    if (!user) return;

    document.querySelector("main").innerHTML = `
        <section class="card">
            <h2>👋 Hoş Geldin</h2>

            <p><strong>GİRİŞ BAŞARILI</strong></p>

            <br>

            <button id="logoutBtn">
                Çıkış Yap
            </button>
        </section>
    `;

    document
        .getElementById("logoutBtn")
        .addEventListener("click", async () => {

            await signOut(auth);

            location.reload();

        });

});
