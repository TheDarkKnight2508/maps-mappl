var map;

function initMap() {
    // Initialize the map with a default center
    map = new mappls.Map('map', {
        center: [28.6139, 77.2090], // Default center (New Delhi)
        zoom: 10
    });

    // Try to get the user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = [position.coords.longitude, position.coords.latitude];
            
            // Add a marker at the user's location
            var marker = new mappls.Marker({
                map: map,
                position: userLocation,
                title: "You are here"
            });

            // Center the map at the user's location after adding the marker
            map.setCenter(userLocation);

        }, function(error) {
            console.error("Error getting user location:", error);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}