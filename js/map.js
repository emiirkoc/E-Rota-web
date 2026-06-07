```javascript
console.log("MAP BAŞLADI");

window.map = null;
window.userMarker = null;

window.addEventListener("load", () => {

const mapContainer =
document.getElementById("map");

if(!mapContainer){

console.error("Map bulunamadı");
return;

}

window.map = L.map("map");

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution:"© OpenStreetMap"
}
).addTo(window.map);

const markers = [];

window.stations.forEach(station => {

const marker = L.marker([
station.lat,
station.lng
])
.addTo(window.map)
.bindPopup(`
<b>${station.name}</b><br>
📍 ${station.distance}<br>
⚡ Doluluk: %${station.occupancy}<br>
💰 ${station.price}
`);

markers.push(marker);

});

const group =
L.featureGroup(markers);

window.map.fitBounds(
group.getBounds(),
{
padding:[50,50]
}
);

loadStations();
loadUserLocation();

});

function loadStations(){

const list =
document.getElementById("stationsList");

if(!list) return;

list.innerHTML = "";

window.stations.forEach(station => {

list.innerHTML += `
<div class="station-card">
<h3>⚡ ${station.name}</h3>
<p>📍 ${station.distance}</p>
<p>⚡ Doluluk: %${station.occupancy}</p>
<p>💰 ${station.price}</p>
</div>
`;

});

}

function loadUserLocation(){

if(!navigator.geolocation){
return;
}

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat =
position.coords.latitude;

const lng =
position.coords.longitude;

window.userMarker =
L.marker([lat,lng])
.addTo(window.map)
.bindPopup("📍 Konumunuz");

},

(error)=>{

console.log(
"Konum alınamadı:",
error.message
);

}

);

}
```
