import fetchHotspots from '../server/hotspots'

export default function eqfeed_callback_wifi(results) {

  // Loop through the results array and place a marker for    each set of coordinates.
  const data = fetchHotspots()
  console.log(data)
  for (var i = 0; i < results.data.length; i++) {
    let wifiData = []
    let coords = [results.data[i][16], results.data[i][15]];
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    wifiData.push(latLng)
  }
}
