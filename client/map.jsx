import plotHotspots from '../client/hotspots'
import plotPayphones from '../client/payphones'
import plotLinks from '../client/links'
import hotspotData from '../client/hotspots_data'
import payphoneData from '../client/payphones_data'
import linkData from '../client/links_data'
import React, {Component} from 'react'
import GoogleMapsLoader from 'google-maps'

export default class Map extends Component{
  constructor(){
    super()
  }

  buildMap(){
      // GoogleMapsLoader.KEY = "AIzaSyBYEzNRa3FMVxwh9EWXfYR - 0rbMjUf- pvg"
      // const map = GoogleMapsLoader.load((google) => {
      global.initMap = function initMap (){
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          // // 40.7589, -73.9851 Times Square
          center: new google.maps.LatLng(40.7589, -73.9851),
          mapTypeId: 'terrain'
        })

          //Link stations
          // map.data.loadGeoJson(
          //   "https://data.cityofnewyork.us/resource/3ktt-gd74.geojson");
          //Payphones
          map.data.loadGeoJson(
            "https://data.cityofnewyork.us/resource/vzju-a4ks.geojson");
          //Wifi hotspots
          // map.data.loadGeoJson(
          //   "https://data.cityofnewyork.us/resource/24t3-xqyv.geojson"
          // );

          // console.log(map.data.loadGeoJson)
      // hotspotData().then(data => plotHotspots(data, map))
      // payphoneData().then(data => plotPayphones(data, map))
      // hotspotData().then(data => plotLinks(data, map))
  }
}



  render(){
    const baseMap = this.buildMap()
    return(
      <div>
        <div className="base-map">
          {baseMap}
        </div>
        <div className="toggles">
          <button>Link Stations</button>
          <button>Wifi Hotspots</button>
          <button>Payphones</button>
        </div>
      </div>
    )
  }
}

