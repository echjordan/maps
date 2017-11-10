const linkData = () => {
  return axios.get("https://data.cityofnewyork.us/resource/3ktt-gd74.json")
  .then(res => res.data)
  .catch(err => console.error(err))
}

export default linkData
