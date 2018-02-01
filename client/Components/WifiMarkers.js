import React, {Component} from 'react'
import {Marker} from 'react-google-maps'

const fetchLinks = async () => {
  let links = await axios.get("https://data.cityofnewyork.us/api/views/3ktt-gd74/rows.json?accessType=DOWNLOAD")
  let linksArr = Array.from(links.data.data)
  return linksArr.map((elem, i) => <Marker
    key={i}
    position={{
    lat: +elem[12],
    lng: +elem[13] }}
    icon={"https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_06-32.png"}
    opacity={.75}

  />)
}

const fetchHotspots = async () => {
  let hotspots = await axios.get("https://data.cityofnewyork.us/api/views/24t3-xqyv/rows.json?accessType=DOWNLOAD")
  let hotspotsArr = Array.from(hotspots.data.data)
  return hotspotsArr.map((elem,i) => <Marker
      key={i}
      position={{
      lat: +elem[14],
      lng: +elem[15] }}
    icon={"https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_06-32.png"}
    opacity= {.75}
  />)
}

export {fetchLinks, fetchHotspots}