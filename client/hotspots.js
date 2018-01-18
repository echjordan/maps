// //PAYPHONES.JS
// import fetchPayphones from './axios'

// export function putPhoneData() {
//   const data = fetchPayphones()
//   //Narrow results by latitude and longitude
//   let filteredData = data.filter((result) => {
//     const lat = result[9].slice(25, 41)
//     const long = result[9].slice(7, 23)
//     return (lat < 40.76 && lat > 40.74) && (long > -74 && long < -73.99)
//   })
//   console.log('THIS IS FILTERED DATA', filteredData)
//   // Loop through the results array and
//   filteredData.forEach(elem => {
//     let payphoneData = []
//     let coords = [elem[9].slice(25, 41), elem[9].slice(7, 23)]
//     const latLng = new google.maps.LatLng(coords[0], coords[1]);
//     payphoneData.push(latLng)
//   })
// }
