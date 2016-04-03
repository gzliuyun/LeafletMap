var map = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'gzliuyun.pieb52l3',
    accessToken: 'pk.eyJ1IjoiZ3psaXV5dW4iLCJhIjoiY2ltaDl2Ym1pMDAwMnRtbTM2aGcxdHEzYiJ9.HTq2PD7OXfv7neLl3bA0Yw'
}).addTo(map);

// var greenIcon = L.icon({
// 	iconUrl: 'leaflet/images/leaf-green.png',
// 	shadowUrl: 'leaflet/images/leaf-shadow.png',

// 	iconSize: [28,95],
// 	shadowSize: [50,64],
// 	inconAnchor: [22,94],
// 	shadowAnchor: [4,62],
// 	popupAnchor: [-3,-76] 
// })

// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaflet/images/leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
var greenIcon = new LeafIcon({iconUrl: 'leaflet/images/leaf-green.png'}),
    redIcon = new LeafIcon({iconUrl: 'leaflet/images/leaf-red.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'leaflet/images/leaf-orange.png'});

// L.icon = function (options) {
//     return new L.Icon(options);
// };
L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");
L.marker([51.495, -0.083], {icon: redIcon}).addTo(map).bindPopup("I am a red leaf.");
L.marker([51.49, -0.1], {icon: orangeIcon}).addTo(map).bindPopup("I am an orange leaf.");