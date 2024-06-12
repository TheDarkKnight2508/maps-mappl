var map;

function initMap() {
    // Initialize the map with a default center
    map = new mappls.Map('map', {
        center: [12.9716, 77.5946], // Default center (New Delhi)
        zoom: 10
    });

    // Try to get the user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = [position.coords.latitude, position.coords.longitude];
            
            // Add a marker at the user's location
            var marker = new mappls.Marker({
                map: map,
                position: userLocation,
                title: "You are here"
            });

            // Center the map at the user's location after adding the marker
            map.setCenter([userLocation[1],uderLocation[0]]);

        }, function(error) {
            console.error("Error getting user location:", error);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}
