// export default function plotLinks(data,map){
//   let links = []
//   const filteredData = data.filter(point => {
//     const lat = point.latitude
//     const long = point.longitude
//     return ((lat < 40.76 && lat > 40.74) && (long > -74 && long < -73.99))
//   })
//   filteredData.map(point => {
//     links.push(point.latitude, point.longitude)
//     const latLng= new google.maps.LatLng(point.latitude, point.longitude)
//     const marker= new google.maps.Marker({
//       position: latLng,
//       map: map
//     })
//   })
// }
