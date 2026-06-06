loginBtn.addEventListener("click", async () => {

    alert("GİRİŞ BUTONU ÇALIŞTI");

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    console.log(email);
    console.log(password);

    try {

        const userCredential =
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        console.log(userCredential);

        alert("Giriş başarılı 🚗⚡");

    } catch(error){

        console.error(error);

        alert(
            error.code + "\n" + error.message
        );

    }

});
