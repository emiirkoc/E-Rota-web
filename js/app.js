function showPage(pageId){

const pages = [
"homePage",
"mapPage",
"stationsPage",
"profilePage"
];

pages.forEach(page => {

document.getElementById(page).style.display =
"none";

});

document.getElementById(pageId).style.display =
"block";

if(pageId === "mapPage"){

setTimeout(() => {

window.dispatchEvent(
new Event("resize")
);

},300);

}

}
