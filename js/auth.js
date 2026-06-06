alert("Giriş başarılı 🚗⚡");

document.querySelector("main").innerHTML = `
<div class="card">
    <h2>Hoş Geldin 👋</h2>
    <p>${email}</p>
    <br>
    <button onclick="location.reload()">
        Çıkış Yap
    </button>
</div>
`;
