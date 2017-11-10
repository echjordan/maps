const linkData = () => {
  return axios.get("https://data.cityofnewyork.us/resource/3ktt-gd74.json")
  .then(res => {
    console.log('LINK DATA', res.data)
    return res.data})
  .catch(err => console.error(err))
}

export default linkData
