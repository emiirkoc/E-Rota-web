console.log("MAP BAŞLADI");

window.addEventListener("load", () => {

    const map = L.map("map").setView(
        [41.0082, 28.9784],
        11
    );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "© OpenStreetMap"
        }
    ).addTo(map);

    const stations = [
        ["ADZE Charge", 41.055, 29.021],
        ["Trugo", 41.0082, 28.9784],
        ["ZES", 41.02, 29.10],
        ["Eşarj", 41.03, 29.03],
        ["Voltrun", 41.06, 29.05]
    ];

    stations.forEach((station) => {

        L.marker([
            station[1],
            station[2]
        ])
        .addTo(map)
        .bindPopup("⚡ " + station[0]);

    });

    // Kullanıcı konumu

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            (position) => {

                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                L.marker([lat, lng])
                .addTo(map)
                .bindPopup("📍 Konumunuz")
                .openPopup();

                map.setView([lat, lng], 13);

            },

            () => {

                console.log("Konum alınamadı");

            }

        );

    }

});
