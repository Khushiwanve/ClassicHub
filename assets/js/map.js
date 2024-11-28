// map.js

function initMap() {
    const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Add markers for significant locations
    const locations = [
        { name: "Mumbai", coords: [19.0760, 72.8777] },
        { name: "Chennai", coords: [13.0827, 80.2707] },
        { name: "Kolkata", coords: [22.5726, 88.3639] },
        { name: "Delhi", coords: [28.6139, 77.2090] },
    ];

    locations.forEach(location => {
        L.marker(location.coords)
            .addTo(map)
            .bindPopup(location.name);
    });
}

// Initialize map when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initMap);
