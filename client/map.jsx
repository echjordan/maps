import plotHotspots from '../client/hotspots'
import plotPayphones from '../client/payphones'
import plotLinks from '../client/links'
import hotspotData from '../client/hotspots_data'
import payphoneData from '../client/payphones_data'
import linkData from '../client/links_data'
import React, {Component} from 'react'

export default class Map extends Component{
  constructor(){
    super()
  }

  buildMap(){

    //RENDER THE MAP
    global.initMap = function initMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(40.7589, -73.9851),
        mapTypeId: 'terrain'
      })

      var centerControlDiv = document.createElement('div');
      var centerControl = new CenterControl(centerControlDiv, map);

      let infowindow = new google.maps.InfoWindow({
        content: '<h1>Get Wifi</h1>' + '<h3>Welcome! Use the buttons to display a particular resource.</h3>'+  '<div>This map is aimed at helping you find your nearest Free Wifi Hotspot or LinkNYC station with charging capabilities, phone, wifi and services information.</div>' + '<div>Selecting the payphone view gives you an idea of how far we need to go to make current resources as ubiquitous as payphones once were. To clear the map, refresh the page.</div>',
        position: {lat: 40.747376, lng: -74.050575}
      });

      infowindow.open(map)

      centerControlDiv.index = 1;
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

      //Manually load data with axios
      // payphoneData().then(data => plotPayphones(data, map))
      // hotspotData().then(data => plotHotspots(data, map))
      //linkData().then(data => plotLinks(data, map))
    }

    //STYLE THE CONTROL BUTTON
    function CenterControl(controlDiv, map) {
      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to recenter the map';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var payphones = document.createElement('div');
      payphones.style.color = 'rgb(25,25,25)';
      payphones.style.fontFamily = 'Roboto,Arial,sans-serif';
      payphones.style.fontSize = '12px';
      payphones.style.lineHeight = '38px';
      payphones.style.paddingLeft = '5px';
      payphones.style.paddingRight = '5px';
      payphones.innerHTML = 'Payphones';
      controlUI.appendChild(payphones);

      var links = document.createElement('div');
      links.style.color = 'rgb(25,25,25)';
      links.style.fontFamily = 'Roboto,Arial,sans-serif';
      links.style.fontSize = '12px';
      links.style.lineHeight = '38px';
      links.style.paddingLeft = '5px';
      links.style.paddingRight = '5px';
      links.innerHTML = 'LinkNYC Stations';
      controlUI.appendChild(links);

      var hotspots = document.createElement('div');
      hotspots.style.color = 'rgb(25,25,25)';
      hotspots.style.fontFamily = 'Roboto,Arial,sans-serif';
      hotspots.style.fontSize = '12px';
      hotspots.style.lineHeight = '38px';
      hotspots.style.paddingLeft = '5px';
      hotspots.style.paddingRight = '5px';
      hotspots.innerHTML = 'Wifi Hotspots';
      controlUI.appendChild(hotspots);

      links.addEventListener('click', function (_, clicked = false) {
        // if (!clicked) {
        //   clicked=true
          map.data.loadGeoJson("https://data.cityofnewyork.us/resource/3ktt-gd74.geojson", { idPropertyName: "links" })
        // }else{
        //   console.log("clicked is true", clicked)
        //   map.data.setMap(null)
        // }
      });

      hotspots.addEventListener('click', function(){
          map.data.loadGeoJson("https://data.cityofnewyork.us/resource/24t3-xqyv.geojson", { idPropertyName: "hotspots" })
      })

      payphones.addEventListener('click', function () {
        map.data.loadGeoJson("https://data.cityofnewyork.us/resource/vzju-a4ks.geojson", { idPropertyName: "payphones" })
      });

    }

  }

  render(){
    const baseMap = this.buildMap()
    return(
      <div className = "container">
          {baseMap}
      </div>
    )
  }
}

