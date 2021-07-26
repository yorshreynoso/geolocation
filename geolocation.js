const getLocation = document.getElementById('location');
getLocation.addEventListener('click', geoFindMe);

function geoFindMe() {

    const status    = document.getElementById('status');
    const mapLink   = document.getElementById('map-link');
  
    mapLink.href        = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      
      initMap(latitude, longitude);
    }
  
    function error() {
        status.style.color = 'red';
        status.textContent = `Please allow the notification to get your location`;
    }
  
    if(!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating… please wait';
        navigator.geolocation.getCurrentPosition(success, error);
    }
  
}
  
// Initialize and add the map

function initMap(latitude = 'undefined', longitude = 'undefined') {
    if((latitude !== 'undefined')|| (longitude !== 'undefined')) {
        const coords = { lat: latitude, lng: longitude };
        // The map, centered at the location
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: coords,
        });
        // The marker, positioned at the coordinate
        const marker = new google.maps.Marker({
            position: coords,
            map: map,
        });
    }
}
