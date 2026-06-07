```javascript
function showPage(pageId){

document.getElementById("homePage").style.display="none";
document.getElementById("mapPage").style.display="none";
document.getElementById("stationsPage").style.display="none";
document.getElementById("profilePage").style.display="none";

document.getElementById(pageId).style.display="block";

if(pageId==="mapPage"){
setTimeout(()=>{
window.dispatchEvent(new Event("resize"));
},200);
}

}
```
