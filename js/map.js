console.log("MAP BAŞLADI");

window.map = null;
window.userMarker = null;

const stations = [

{
name:"ADZE Charge",
lat:41.055,
lng:29.021,
distance:"0.5 km",
occupancy:25,
price:"8.50 ₺/kWh"
},

{
name:"Trugo",
lat:41.0082,
lng:28.9784,
distance:"0.8 km",
occupancy:80,
price:"8.99 ₺/kWh"
},

{
name:"ZES",
lat:41.0300,
lng:29.0500,
distance:"2.1 km",
occupancy:45,
price:"8.75 ₺/kWh"
},

{
name:"Eşarj",
lat:41.0600,
lng:29.0200,
distance:"3.4 km",
occupancy:60,
price:"8.90 ₺/kWh"
},

{
name:"Voltrun",
lat:41.0000,
lng:29.1200,
distance:"4.7 km",
occupancy:15,
price:"8.60 ₺/kWh"
}

];

window.addEventListener("load", () => {

const mapContainer =
document.getElementById("map");

if(!mapContainer){

console.error("Map bulunamadı");
return;

}

window.map = L.map("map",{
zoomControl:false
});

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution:"© OpenStreetMap"
}
).addTo(window.map);

const markers = [];

stations.forEach(station => {

const marker = L.marker([
station.lat,
station.lng
])
.addTo(window.map)
.bindPopup(`<b>${station.name}</b><br>
📍 ${station.distance}<br>
⚡ Doluluk: %${station.occupancy}<br>
💰 ${station.price}`);

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

stations.forEach(station => {

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
