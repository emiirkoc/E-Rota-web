console.log("AUTH ÇALIŞTI");
import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginBtn =
document.getElementById("loginBtn");

const registerBtn =
document.getElementById("registerBtn");

loginBtn.addEventListener(
"click",
async ()=>{

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

alert(
"Giriş başarılı 🚗⚡"
);

}
catch(error){

alert(
error.message
);

}

}
);

registerBtn.addEventListener(
"click",
async ()=>{

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try{

await createUserWithEmailAndPassword(
auth,
email,
password
);

alert(
"Kayıt başarılı 🎉"
);

}
catch(error){

alert(
error.message
);

}

}
);

onAuthStateChanged(
auth,
(user)=>{

if(user){

console.log(
"Giriş yapan:",
user.email
);

}

}
);
