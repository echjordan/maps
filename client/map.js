import eqfeed_callback_wifi from '../client/hotspots'
// import getPayphones, {putPayphoneData} from '../client/payphones'

var map;

global.initMap = function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(40.7589, -73.9851),
    mapTypeId: 'terrain'
  });
}

eqfeed_callback_wifi()

// // 40.7589, -73.9851 Times Square

// function eqfeed_callback_phone(results) {
//   putPayphoneData(results)
// }

