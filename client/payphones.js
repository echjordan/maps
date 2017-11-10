//coording @ index 9 as "POINT (-73.8981682368399 40.74955730896312)",
export default function plotPayphones(data, map) {
  // let payphones = []
  const filteredData = data.filter(point => {
    const long = point[9].slice(7, 23)
    const lat = point[9].slice(26, 41)
    return ((lat < 40.76 && lat > 40.74) && (long > -74 && long < -73.99))
  })
  filteredData.map(point => {
    const long = point[9].slice(7, 23)
    const lat = point[9].slice(26, 41)
    let coords = [long, lat]
    // payphones.push(coords)
    // const payphones = {
    //   path: google.maps.SymbolPath.CIRCLE,
    //   fillColor: '#FF7F50',
    //   fillOpacity: 1,
    //   strokeColor: '',
    //   strokeWeight: 0,
    //   scale: .1
    // }
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    const marker = new google.maps.Marker({
      position: latLng,
      map: map,
      // icon: payphones
    });
  })
}

