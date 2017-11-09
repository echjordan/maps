export default function putPhoneData(){
  const data = fetchPayphones()
  for (var i = 0; i < data.length; i++) {
    let coords = [data[i][16], data[i][15]];
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}

