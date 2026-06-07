```javascript
console.log("APP BAŞLADI");

const navButtons =
document.querySelectorAll(".nav-btn");

const pages =
document.querySelectorAll(".page");

function showPage(pageId){

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

if(btn.dataset.page === pageId){

btn.classList.add("active");

}

});

if(
pageId === "homePage" &&
window.map
){

setTimeout(() => {

window.map.invalidateSize();

},300);

}

}

window.showPage = showPage;

navButtons.forEach(button => {

button.addEventListener("click", () => {

showPage(
button.dataset.page
);

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
```
