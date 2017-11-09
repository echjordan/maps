//coords @ index 15/16 as LAT/LONG
export default function fetchHotspots() {
  axios({
    method: 'get',
    url: 'https://data.cityofnewyork.us/api/views/varh-9tsp/rows.json?accessType=DOWNLOAD',
    responseType: 'json'
  })
    .then((res) => {return res.data})
    // .then(hotspots => {
    //   console.log(hotspots)

    //   eqfeed_callback_wifi(hotspots)
    // })
    .catch(err => console.error(err))
}
