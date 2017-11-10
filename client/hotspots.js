export default function plotHotspots(data, map) {
  // let hotspots = []
  let filteredData = data.filter((point) => {
    const long = point[9].slice(7, 23)
    const lat = point[9].slice(25, 41)
    return ((lat < 40.76 && lat > 40.74) && (long > -74 && long < -73.99))
  })
  filteredData.map(point => {
    const long = point[9].slice(7, 23)
    const lat = point[9].slice(25, 41)
    let coords = [long, lat]
    // hotspots.push(coords)
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  })

}
