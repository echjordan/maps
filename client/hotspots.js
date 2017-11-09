import fetchHotspots from '../server/hotspots'

export default function eqfeed_callback_wifi() {

  // Loop through the results array and place a marker for    each set of coordinates.
  const data = fetchHotspots()
  console.log('THIS IS THE DATA', data)
  if(data){
    for (var i = 0; i < data.length; i++) {
      let coords = [data[i][16], data[i][15]];
      const latLng = new google.maps.LatLng(coords[1], coords[0]);
      const marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    }
  }
}


// window.eqfeed_callback = function (results) {
//   for (var i = 0; i < results.features.length; i++) {
//     var coords = results.features[i].geometry.coordinates;
//     var latLng = new google.maps.LatLng(coords[1], coords[0]);
//     var marker = new google.maps.Marker({
//       position: latLng,
//       map: map
//     });
//   }
// }
