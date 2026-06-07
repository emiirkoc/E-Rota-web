console.log("APP BAŞLADI");

// Sayfa geçişleri

function showPage(pageId) {

    const pages = [
        "homePage",
        "mapPage",
        "stationsPage",
        "profilePage"
    ];

    pages.forEach(page => {

        const element =
        document.getElementById(page);

        if (element) {
            element.style.display = "none";
        }

    });

    const activePage =
    document.getElementById(pageId);

    if (activePage) {
        activePage.style.display = "block";
    }

    // Menü aktifliği

    document
    .querySelectorAll(".nav-btn")
    .forEach(btn => {

        btn.classList.remove("active");

    });

    const activeButton =
    document.querySelector(
        `[data-page="${pageId}"]`
    );

    if (activeButton) {

        activeButton.classList.add(
            "active"
        );

    }

    // Harita yeniden çizilsin

    if (pageId === "mapPage") {

        setTimeout(() => {

            window.dispatchEvent(
                new Event("resize")
            );

        }, 300);

    }

}

// Global erişim

window.showPage = showPage;

// Batarya sistemi

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const batterySlider =
        document.getElementById(
            "batterySlider"
        );

        const batteryText =
        document.getElementById(
            "batteryText"
        );

        if (
            batterySlider &&
            batteryText
        ) {

            batterySlider.addEventListener(
                "input",
                () => {

                    batteryText.textContent =
                    "%" +
                    batterySlider.value;

                }
            );

        }

    }
);
