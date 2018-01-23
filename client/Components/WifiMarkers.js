import React, {Component} from 'react'
import {Marker} from 'react-google-maps'

const fetchLinks = async () => {
  let links = await axios.get("https://data.cityofnewyork.us/api/views/3ktt-gd74/rows.json?accessType=DOWNLOAD")
  let linksArr = Array.from(links.data.data)
  return linksArr.map(elem => <Marker position={{
    lat: +elem[12],
    lng: +elem[13] }} />)
}

const fetchHotspots = async () => {
  let hotspots = await axios.get("https://data.cityofnewyork.us/api/views/24t3-xqyv/rows.json?accessType=DOWNLOAD")
  let hotspotsArr = Array.from(hotspots.data.data)
  return hotspotsArr.map(elem => <Marker position={{
      lat: +elem[14],
      lng: +elem[15] }} />)
}

export {fetchLinks, fetchHotspots}
