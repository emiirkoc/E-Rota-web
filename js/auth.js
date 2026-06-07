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

if (loginBtn) {
  loginBtn.onclick = async () => {
    try {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      await signInWithEmailAndPassword(auth, email, password);

      alert("Giriş başarılı");
    } catch (error) {
      alert(error.message);
    }
  };
}

if (registerBtn) {
  registerBtn.onclick = async () => {
    try {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Kayıt başarılı");
    } catch (error) {
      alert(error.message);
    }
  };
}

onAuthStateChanged(auth, (user) => {
  if (!user) return;

  document.querySelector("main").innerHTML = `
    <section class="card">
      <h2>👋 Hoş Geldin</h2>
      <p>${user.email}</p>
      <button id="logoutBtn">Çıkış Yap</button>
    </section>
  `;

  const logoutBtn = document.getElementById("logoutBtn");

  logoutBtn.onclick = async () => {
    await signOut(auth);
    location.reload();
  };
});
