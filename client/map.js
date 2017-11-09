import plotHotspots from '../client/hotspots'
import plotPayphones from '../client/payphones'
import hotspotData from '../client/hotspots_data'
import payphoneData from '../client/payphones_data'

let map;
global.initMap = function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    // // 40.7589, -73.9851 Times Square
    center: new google.maps.LatLng(40.7589, -73.9851),
    mapTypeId: 'terrain'
  });
}

hotspotData().then(data => plotHotspots(data, map))
payphoneData().then(data => plotPayphones(data, map))
