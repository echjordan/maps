
const fetchPayhpones = () => {
  return axios.get("https://data.cityofnewyork.us/api/views/varh-9tsp/rows.json?accessType=DOWNLOAD")
.then(res => res.json(res))
.catch(err => console.error(err))}

export default fetchPayhpones
