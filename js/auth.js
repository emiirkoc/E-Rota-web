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

const authCard = document.getElementById("authCard");
const userPanel = document.getElementById("userPanel");
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

// Giriş
loginBtn?.addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(
      auth,
      emailInput.value.trim(),
      passwordInput.value.trim()
    );
  } catch (error) {
    alert(error.message);
  }
});

// Kayıt
registerBtn?.addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      emailInput.value.trim(),
      passwordInput.value.trim()
    );
  } catch (error) {
    alert(error.message);
  }
});

// Oturum Takibi
onAuthStateChanged(auth, (user) => {

  if (user) {

    authCard.style.display = "none";

    userPanel.style.display = "block";

    userEmail.textContent = user.email;

  } else {

    authCard.style.display = "block";

    userPanel.style.display = "none";

  }

});

// Çıkış
logoutBtn?.addEventListener("click", async () => {
  await signOut(auth);
});
