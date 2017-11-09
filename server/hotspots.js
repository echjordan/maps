//coords @ index 15/16 as LAT/LONG
export default function fetchHotspots() {
  axios.get('https://data.cityofnewyork.us/api/views/varh-9tsp/rows.json?accessType=DOWNLOAD')
  .then((res) => res.data)
  .catch(err => console.error(err))
}
