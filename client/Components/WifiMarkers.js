import React, {Component} from 'react'
import {Marker} from 'react-google-maps'

const fetchLinks = async () => {
  let links = await axios.get("https://data.cityofnewyork.us/api/views/3ktt-gd74/rows.json?accessType=DOWNLOAD")
  let linksArr = Array.from(links.data.data)
  localStorage.setItem("links", JSON.stringify(links.data.data))
  return makeMarkers(linksArr, 12, 13)
}

const fetchHotspots = async () => {
  let hotspots = await axios.get("https://data.cityofnewyork.us/api/views/24t3-xqyv/rows.json?accessType=DOWNLOAD")
  let hotspotsArr = Array.from(hotspots.data.data)
  localStorage.setItem("hotspots", JSON.stringify(hotspots.data.data))
  return makeMarkers(hotspotsArr, 14, 15)
}

const makeMarkers = (arr, latIndex, lngIndex) =>{
  return arr.map((elem, i) => <Marker
    key={i}
    position={{
      lat: +elem[latIndex],
      lng: +elem[lngIndex]
    }}
    icon={"https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_06-32.png"}
    opacity={.75}
  />)
}


export {fetchLinks, fetchHotspots, makeMarkers}
