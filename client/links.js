export default function plotLinks(data,map){
  let links = []
  data.map(point => {
    links.push(point.latitude, point.longitude)
    const latLng= new google.maps.LatLng(point.latitude, point.longitude)
    const marker= new google.maps.Marker({
      position: latLng,
      map: map
    })
  })
}
