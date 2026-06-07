const map = L.map("map").setView(
[41.0082,28.9784],
10
);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution:"© OpenStreetMap"
}
).addTo(map);

const stations = [

["Trugo",41.0082,28.9784],
["ZES",41.05,29.02],
["Eşarj",41.10,29.15],
["Voltrun",40.98,29.05]

];

stations.forEach(station=>{

L.marker([
station[1],
station[2]
])

.addTo(map)

.bindPopup(
"⚡ "+station[0]
);

});
