import React, { Component } from 'react'


export default class Resources extends Component{
  constructor(){
    super()
  }
  render(){
            //EXPLAINS THE MAP
      // let infoText = '<h1>Get Wifi</h1>' + '<h3>Welcome! Use the buttons to display a particular resource.</h3>' + '<div>This map is aimed at helping you find your nearest Free Wifi Hotspot or LinkNYC station with charging capabilities, phone, wifi and services information.</div>' + '<div>Selecting the payphone view gives you an idea of how far we need to go to make current resources as ubiquitous as payphones once were. To clear the map, refresh the page.</div>'
      // let infoWindow = new google.maps.InfoWindow({
      //   content: infoText,
      // });

      // infoWindow.open(map)

      // infoWindow.setContent(infoText)
      // infoWindow.setPosition({
      //   lat: 40.7308,
      //   lng: -73.9973
      // })

      // infoWindow.open(map)
      // centerControlDiv.index = 1;
      // map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);

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
      // controlUI.title = 'Click to recenter the map';
      controlDiv.appendChild(controlUI);

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


      links.addEventListener('click', function () {
        map.data.loadGeoJson("https://data.cityofnewyork.us/resource/3ktt-gd74.geojson", {
          idPropertyName: "links"
        })
      });

      hotspots.addEventListener('click', function () {
        map.data.loadGeoJson("https://data.cityofnewyork.us/resource/24t3-xqyv.geojson", {
          idPropertyName: "hotspots"
        })
      })
    }

  }
}
