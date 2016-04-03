var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'gzliuyun.pieb52l3',
    accessToken: 'pk.eyJ1IjoiZ3psaXV5dW4iLCJhIjoiY2ltaDl2Ym1pMDAwMnRtbTM2aGcxdHEzYiJ9.HTq2PD7OXfv7neLl3bA0Yw'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(mymap);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

// var popup = L.popup()
//     .setLatLng([51.5, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);
var popup = L.popup()
function onMapClick(e) {
    popup.setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);

//禁止移动和放大缩小  
// mymap.dragging.disable();  
// mymap.touchZoom.disable();  
// mymap.doubleClickZoom.disable();  
// mymap.scrollWheelZoom.disable();  
  
// disable tap handler, if present.  
  
//禁止单击  
// if (mymap.tap) mymap.tap.disable(); 


//添加缩放控制zoom，在右下角
var zoomControl = L.control.zoom({  
    position: 'bottomright'  
});   
mymap.addControl(zoomControl);
//添加比例尺
L.control.scale().addTo(mymap);