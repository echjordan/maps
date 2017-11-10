export default function plotLinks(data,map){
  let links = []
  data.map(point => {
    let coords = [point[9].slice(7, 23), point[9].slice(26, 41)];
    links.push(coords)
    const latLng= new google.maps.LatLng(coords)
    const marker= new google.maps.Marker({
      position: latLng,
      map: map
    })
  })
}
