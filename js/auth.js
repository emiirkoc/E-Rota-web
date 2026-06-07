alert("YENİ AUTH YÜKLENDİ");
console.log("YENİ AUTH YÜKLENDİ");
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

```
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
```

});

// GİRİŞ YAP
loginBtn.addEventListener("click", async () => {

```
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
```

});

// OTURUM TAKİBİ
onAuthStateChanged(auth, (user) => {

```
if (!user) return;

document.querySelector("main").innerHTML = `

<section class="card">

    <h2>👋 Hoş Geldin</h2>

    <p>${user.email}</p>

</section>

<section class="card">

    <h2>🚗 Araç Garajım</h2>

    <select id="carSelect">
        <option>Togg T10X</option>
        <option>Tesla Model Y</option>
        <option>BYD Seal</option>
        <option>Hyundai Ioniq 5</option>
    </select>

</section>

<section class="card">

    <h2>🔋 Batarya Durumu</h2>

    <input
    type="range"
    min="0"
    max="100"
    value="75"
    id="batterySlider">

    <p id="batteryText">
    Batarya: %75
    </p>

</section>

<section class="card">

    <h2>⚡ Yakındaki İstasyonlar</h2>

    <div>⚡ Trugo - 1.2 km</div>
    <div>⚡ ZES - 2.4 km</div>
    <div>⚡ Eşarj - 3.1 km</div>

</section>

<section class="card">

    <h2>🗺️ Rota Oluştur</h2>

    <input
    id="startPoint"
    placeholder="Başlangıç">

    <input
    id="endPoint"
    placeholder="Varış">

    <button id="routeBtn">
    Rota Oluştur
    </button>

    <p id="routeResult"></p>

</section>

<section class="card">

    <button id="logoutBtn">
    🚪 Çıkış Yap
    </button>

</section>

`;

document
.getElementById("batterySlider")
.addEventListener("input", function(){

    document.getElementById(
    "batteryText"
    ).innerText =
    "Batarya: %" + this.value;

});

document
.getElementById("routeBtn")
.addEventListener("click", () => {

    const start =
    document.getElementById(
    "startPoint"
    ).value;

    const end =
    document.getElementById(
    "endPoint"
    ).value;

    document.getElementById(
    "routeResult"
    ).innerText =
    start + " → " + end +
    " rotası oluşturuldu.";

});

document
.getElementById("logoutBtn")
.addEventListener("click", async () => {

    await signOut(auth);

    location.reload();

});
```

});
