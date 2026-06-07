```javascript
console.log("MAP BAŞLADI");

window.addEventListener("load", () => {

const mapElement = document.getElementById("map");

if(!mapElement){
console.error("Map bulunamadı");
return;
}

const map = L.map("map").setView(
[41.0082, 28.9784],
11
);

window.map = map;

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution:"© OpenStreetMap"
}
).addTo(map);

/* İSTASYONLAR */

window.stations.forEach(station => {

L.marker([
station.lat,
station.lng
])
.addTo(map)
.bindPopup(`
<b>${station.name}</b><br>
📍 ${station.distance}<br>
⚡ Doluluk: %${station.occupancy}<br>
💰 ${station.price}
`);

});

/* LİSTE */

const list =
document.getElementById("stationsList");

if(list){

window.stations.forEach(station => {

list.innerHTML += `
<div class="station-card">
<h3>${station.name}</h3>
<p>📍 ${station.distance}</p>
<p>⚡ %${station.occupancy}</p>
<p>💰 ${station.price}</p>
</div>
`;

});

}

/* KONUM */

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

(position)=>{

L.marker([
position.coords.latitude,
position.coords.longitude
])
.addTo(map)
.bindPopup("📍 Konumunuz");

}

);

}

});
```
