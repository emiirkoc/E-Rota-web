console.log("MAP BAŞLADI");

let map;

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

const mapElement =
document.getElementById("map");

if(!mapElement){

console.log("MAP BULUNAMADI");
return;

}

map = L.map("map").setView(
[41.0082, 28.9784],
11
);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution:"© OpenStreetMap"
}
).addTo(map);

stations.forEach(station => {

let iconColor = "green";

if(station.occupancy > 70){
iconColor = "red";
}
else if(station.occupancy > 40){
iconColor = "orange";
}

L.marker([
station.lat,
station.lng
])
.addTo(map)
.bindPopup(`
<h3>${station.name}</h3>

<p>📍 Mesafe: ${station.distance}</p>

<p>⚡ Doluluk: %${station.occupancy}</p>

<p>💰 Fiyat: ${station.price}</p>

<button style="
width:100%;
padding:10px;
border:none;
border-radius:10px;
background:#21ff9b;
cursor:pointer;
font-weight:bold;
">
İstasyona Git
</button>
`);

});

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

console.log(
"Konum desteklenmiyor"
);

return;

}

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat =
position.coords.latitude;

const lng =
position.coords.longitude;

L.marker([lat,lng])
.addTo(map)
.bindPopup("📍 Konumunuz")
.openPopup();

},

(error)=>{

console.log(
"Konum alınamadı:",
error.message
);

}

);

}
