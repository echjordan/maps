const payphoneData = () => {
  return axios.get('https://data.cityofnewyork.us/api/views/vzju-a4ks/rows.json?accessType=DOWNLOAD')
    .then((res) => res.data.data)
    .catch(err => console.error(err))
}

export default payphoneData
