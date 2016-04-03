var map = L.map('mapid');
// var mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
// var mapboxAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
// var mapboxToken = 'pk.eyJ1IjoiZ3psaXV5dW4iLCJhIjoiY2ltaDl2Ym1pMDAwMnRtbTM2aGcxdHEzYiJ9.HTq2PD7OXfv7neLl3bA0Yw';
// L.tileLayer(mapboxUrl, {id: 'gzliuyun.pilcpm04', attribution: mapboxAttribution, accessToken:mapboxToken}).addTo(map);


map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';

//添加地图
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
      //标注图层为pane
        pane: 'labels'
}).addTo(map);

//添加地图上的地名标签
var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);

var geojson = L.geoJson(chinaData, chinaData.features).addTo(map);

geojson.eachLayer(function (layer) {
    layer.bindPopup(layer.feature.properties.ADM1);
});

// 设置地图展现的边框
map.fitBounds(geojson.getBounds());