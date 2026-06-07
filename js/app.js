console.log("APP BAŞLADI");

const navButtons =
document.querySelectorAll(".nav-btn");

const pages =
document.querySelectorAll(".page");

navButtons.forEach(button => {

button.addEventListener("click", () => {

const pageId =
button.dataset.page;

pages.forEach(page => {

page.classList.remove("active");

});

const targetPage =
document.getElementById(pageId);

if(targetPage){

targetPage.classList.add("active");

}

navButtons.forEach(btn => {

btn.classList.remove("active");

});

button.classList.add("active");

if(
pageId === "homePage" &&
window.map
){

setTimeout(() => {

window.map.invalidateSize();

},300);

}

});

});

const locationBtn =
document.querySelector(".location-btn");

if(locationBtn){

locationBtn.addEventListener("click", () => {

if(
window.userMarker &&
window.map
){

window.map.setView(
window.userMarker.getLatLng(),
15
);

window.userMarker.openPopup();

}

});

}
