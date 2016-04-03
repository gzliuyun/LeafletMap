var mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
var mapboxAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
var mapboxToken = 'pk.eyJ1IjoiZ3psaXV5dW4iLCJhIjoiY2ltaDl2Ym1pMDAwMnRtbTM2aGcxdHEzYiJ9.HTq2PD7OXfv7neLl3bA0Yw'

var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

var cities = L.layerGroup([littleton, denver, aurora, golden]);

var grayscale = L.tileLayer(mapboxUrl, {id: 'gzliuyun.pilcpm04', attribution: mapboxAttribution, accessToken:mapboxToken}),
    streets   = L.tileLayer(mapboxUrl, {id: 'gzliuyun.pieb52l3', attribution: mapboxAttribution, accessToken:mapboxToken});

var map = L.map('mapid', {
    center: [39.73, -104.99],
    zoom: 10,
    layers: [grayscale, cities]
});

var baseMaps = {
    "Grayscale": grayscale,
    "Streets": streets
};

var overlayMaps = {
    "Cities": cities
};

L.control.layers(baseMaps, overlayMaps).addTo(map);