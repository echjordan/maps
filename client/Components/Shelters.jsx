import React, { Component } from 'react'
import { Marker, withGoogleMap } from 'react-google-maps'

const dropIns = async () => {
  let dropIns = await axios.get("https://data.cityofnewyork.us/resource/kjtk-8yxq.json")
  let dropInsArr = Array.from(dropIns.data)
  return dropInsArr.map((elem, i) => <Marker
      key = {i}
    icon={"https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_24-48.png"}
      position= {{
          lat: +elem.latitude,
          lng: +elem.longitude
        }}
      />
  )
}

const homeBases = async () => {
  let homeBases = await axios.get("https://data.cityofnewyork.us/resource/5ud2-iqje.json")
  let homeBaseArr = Array.from(homeBases.data)
  return homeBaseArr.map((elem, i) => <Marker
    // onClick = {() => }
    key = {i}
    icon={"https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_23-48.png"}
    position = {{
      lat: +elem.latitude,
      lng: +elem.longitude
    }}
  />
    // {this.state.homeBaseOpen}

)
}

export {dropIns, homeBases}
