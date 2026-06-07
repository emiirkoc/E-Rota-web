console.log("MAP BAŞLADI");

const stations = [

{
name:"Trugo",
lat:41.0082,
lng:28.9784,
distance:"0.8 km",
doluluk:"%80",
price:"8.99 ₺/kWh"
},

{
name:"ZES",
lat:41.03,
lng:29.05,
distance:"2.1 km",
doluluk:"%45",
price:"8.75 ₺/kWh"
},

{
name:"Eşarj",
lat:41.06,
lng:29.02,
distance:"3.4 km",
doluluk:"%60",
price:"8.90 ₺/kWh"
},

{
name:"Voltrun",
lat:41.00,
lng:29.12,
distance:"4.7 km",
doluluk:"%15",
price:"8.60 ₺/kWh"
}

];

window.addEventListener("load", () => {

const mapDiv =
document.getElementById("map");

if(!mapDiv) return;

const map =
L.map("map").setView(
[41.0082,28.9784],
11
);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution:"© OpenStreetMap"
}
).addTo(map);

stations.forEach(station => {

L.marker([
station.lat,
station.lng
])

.addTo(map)

.bindPopup(`
<b>${station.name}</b>
<br>
📍 ${station.distance}
<br>
⚡ Doluluk ${station.doluluk}
<br>
💰 ${station.price}
`);

});

const list =
document.getElementById("stationsList");

if(list){

stations.forEach(station => {

list.innerHTML += `
<div class="station-card">

<h3>⚡ ${station.name}</h3>

<p>📍 ${station.distance}</p>

<p>⚡ Doluluk ${station.doluluk}</p>

<p>💰 ${station.price}</p>

</div>
`;

});

}

});
