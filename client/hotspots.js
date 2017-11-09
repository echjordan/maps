export default function plotHotspots(data, map) {
  let filteredData = data.filter((result) => {
    return (result[9].slice(25, 41) < 40.76 && result[9].slice(25, 41) > 40.74) && (result[9].slice(7, 23) > -74 && result[9].slice(7, 23) < -73.99)
  })
  for (var i = 0; i < filteredData.length; i++) {
    let coords = [filteredData[i][9].slice(7, 23), filteredData[i][9].slice(25, 41)]
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}
