//coording @ index 9 as "POINT (-73.8981682368399 40.74955730896312)",
export default function plotPayphones(data, map) {
  for (var i = 0; i < data.length; i++) {
    let coords = [data[i][9].slice(7,23), data[i][9].slice(26,41)];
    console.log('THESE ARE THE COORDS', coords)
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}
