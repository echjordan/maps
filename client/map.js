import getHotspots, {putWifiData} from './hotspots'
import getPayphones, {putPayphoneData} from './payphones'

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(40.7589, -73.9851),
    mapTypeId: 'terrain'
  });
}


function eqfeed_callback_wifi(results) {
  // ABSTRACT AWAY GRABBING DATA
  putWifiData(results)

}

// 40.7589, -73.9851 Times Square

function eqfeed_callback_phone(results) {
  putPayphoneData(results)
}
