console.log("AUTH ÇALIŞTI");

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

console.log(loginBtn);
console.log(registerBtn);

registerBtn.addEventListener("click", () => {
    alert("KAYIT BUTONU ÇALIŞIYOR");
});

loginBtn.addEventListener("click", () => {
    alert("GİRİŞ BUTONU ÇALIŞIYOR");
});
