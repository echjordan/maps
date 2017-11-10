//coording @ index 9 as "POINT (-73.8981682368399 40.74955730896312)",
export default function plotPayphones(data, map) {
  // let payphones = []

  const filteredData = data.filter(point => {
    const lat = point[9].slice(7, 23)
    const lang = point[9].slice(26, 41)
    // console.log(lat,lang)
    return ((lang < 40.76 && lang > 40.74) && (lat > -74 && lat < -73.99))
  })
  filteredData.map(point => {
    const lat = point[9].slice(7, 23)
    const lang = point[9].slice(26, 41)
    let coords = [lat, lang]
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
    // payphones.push(coords)

}

