import fetchHotspots from '../server/hotspots'

export function putWifiData(results){
  // Loop through the results array and place a marker for    each
// set of coordinates.
  const data = fetchHotspots()
  for (var i = 0; i < results.data.length; i++) {
    let coords = [results.data[i][16], results.data[i][15]];
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
    })
  }
}
