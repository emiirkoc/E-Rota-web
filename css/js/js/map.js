let map = L.map('mapContainer').setView(
[41.0082,28.9784],
11
);

L.tileLayer(
'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
{
attribution:'© OpenStreetMap © CARTO'
}
).addTo(map);

const stations = [

{
name:"ADZE Charge",
lat:41.055,
lng:29.021
},

{
name:"Trugo",
lat:41.0082,
lng:28.9784
},

{
name:"ZES",
lat:41.01,
lng:29.08
},

{
name:"Eşarj",
lat:41.03,
lng:29.03
},

{
name:"Voltrun",
lat:41.07,
lng:29.04
}

];

stations.forEach(station=>{

L.marker([
station.lat,
station.lng
])
.addTo(map)
.bindPopup(`
<b>⚡ ${station.name}</b>
<br>
Şarj İstasyonu
`);

});

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat =
position.coords.latitude;

const lng =
position.coords.longitude;

L.marker([lat,lng])
.addTo(map)
.bindPopup("🚗 Konumunuz");

map.setView(
[lat,lng],
13
);

}

);

}
