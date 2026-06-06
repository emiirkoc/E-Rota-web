console.log("MAP DOSYASI ÇALIŞTI");

window.onload = function () {

const haritaAlani =
document.getElementById("mapContainer");

console.log(haritaAlani);

if (!haritaAlani) {
    alert("mapContainer bulunamadı");
    return;
}

haritaAlani.innerHTML =
"<div style='padding:20px;color:red;font-weight:bold'>HARİTA TEST BAŞARILI</div>";

};
