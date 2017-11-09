import fetchPayphones from '../server/payphones'

export function putPhoneData(){
  const data = fetchPayphones()
  let filteredData = data.filter((result) => {
    // console.log(result[9].slice(25,41))
    // console.log(result[9].slice(7,23))
    return (result[9].slice(25, 41) < 40.76 && result[9].slice(25, 41) > 40.74) && (result[9].slice(7, 23) > -74 && result[9].slice(7, 23) < -73.99)
  }
  )

  console.log(filteredData)
// Loop through the results array and place a marker for    each
// set of coordinates.
  for (var i = 0; i < filteredData.length; i++) {
    console.log(filteredData[i][9])

    let coords = [filteredData[i][9].slice(7, 23), filteredData[i][9].slice(25, 41)]
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
    })
}
}
