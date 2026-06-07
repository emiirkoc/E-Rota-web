console.log("MAP BAŞLADI");

const stations = [
{
name:"Trugo",
lat:41.0082,
lng:28.9784,
doluluk:80,
price:"8.99 ₺/kWh"
},
{
name:"ZES",
lat:41.03,
lng:29.05,
doluluk:45,
price:"8.75 ₺/kWh"
},
{
name:"Eşarj",
lat:41.06,
lng:29.02,
doluluk:60,
price:"8.90 ₺/kWh"
},
{
name:"Voltrun",
lat:41.00,
lng:29.12,
doluluk:15,
price:"8.60 ₺/kWh"
}
];

window.addEventListener("load",()=>{

const mapDiv=document.getElementById("map");

if(!mapDiv) return;

const map=L.map("map").setView(
[41.0082,28.9784],
11
);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution:"© OpenStreetMap"
}
).addTo(map);

stations.forEach(station=>{

let color="green";

if(station.doluluk>70){
color="red";
}
else if(station.doluluk>40){
color="orange";
}

const marker=L.marker([
station.lat,
station.lng
]).addTo(map);

marker.bindPopup(`
<b>${station.name}</b>
<br>
⚡ Doluluk: %${station.doluluk}
<br>
💰 ${station.price}
`);

});

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat=position.coords.latitude;
const lng=position.coords.longitude;

L.marker([lat,lng])
.addTo(map)
.bindPopup("📍 Konumunuz")
.openPopup();

map.setView([lat,lng],13);

},

(error)=>{
console.log(error);
}

);

}

loadStations();

});

function loadStations(){

const container=
document.getElementById("stationsList");

if(!container) return;

container.innerHTML="";

stations.forEach(station=>{

container.innerHTML+=`
<div class="station-card">
<h3>${station.name}</h3>

<p>⚡ Doluluk: %${station.doluluk}</p>

<p>💰 ${station.price}</p>
</div>
`;

});

}
