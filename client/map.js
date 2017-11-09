import plotHotspots from '../client/hotspots'
import hotspotData from '../server/hotspots'
// import getPayphones, {putPayphoneData} from '../client/payphones'

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
