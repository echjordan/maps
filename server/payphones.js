//coording @ index 9 as "POINT (-73.8981682368399 40.74955730896312)",
export default function fetchPayphones() {
  axios({
    method: 'get',
    url: 'https://data.cityofnewyork.us/api/views/vzju-a4ks/rows.json?accessType=DOWNLOAD',
    responseType: 'json'
  })
    .then((res) => {return res.data})
    // .then(payphones => {
    //   console.log(payphones)
      // eqfeed_callback_phone(payphones)
    // })
    .catch(err => console.error(err))
}
