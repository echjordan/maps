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

      let infoText = '<h1>Get Wifi</h1>' + '<h3>Welcome! Use the buttons to display a particular resource.</h3>' + '<div>This map is aimed at helping you find your nearest Free Wifi Hotspot or LinkNYC station with charging capabilities, phone, wifi and services information.</div>' + '<div>Selecting the payphone view gives you an idea of how far we need to go to make current resources as ubiquitous as payphones once were. To clear the map, refresh the page.</div>'
      let infoWindow = new google.maps.InfoWindow({
        content: infoText,
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setContent("<p>You are here ↓</p>" + infoText)
          infoWindow.setPosition(pos);
          infoWindow.open(map)
          map.setCenter(pos);
          map.setZoom(16)

        });
      }
      infoWindow.setContent(infoText)
      infoWindow.setPosition({
        lat: 40.7308,
        lng: -73.9973
      })

      infoWindow.open(map)
      centerControlDiv.index = 1;
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

    }

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

      // Set CSS for the control interior.
      var payphones = document.createElement('div');
      payphones.style.color = 'rgb(25,25,25)';
      payphones.style.fontFamily = 'Roboto,Arial,sans-serif';
      payphones.style.fontSize = '11px';
      payphones.style.lineHeight = '38px';
      payphones.style.paddingLeft = '5px';
      payphones.style.paddingRight = '5px';
      payphones.innerHTML = '  Payphones';
      controlUI.appendChild(payphones);

      links.addEventListener('click', function () {
        map.data.loadGeoJson("https://data.cityofnewyork.us/resource/3ktt-gd74.geojson", {
          idPropertyName: "links"
        })
      });

      hotspots.addEventListener('click', function(){
         map.data.loadGeoJson("https://data.cityofnewyork.us/resource/24t3-xqyv.geojson", {
            idPropertyName: "hotspots"
          })
      })

      payphones.addEventListener('click', function () {
        map.data.loadGeoJson("https://data.cityofnewyork.us/resource/vzju-a4ks.geojson", {idPropertyName: "payphones"})
      });
    }

    window.addEventListener('beforeinstallprompt', function (e) {
      // beforeinstallprompt Event fired

      // e.userChoice will return a Promise.
      // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
      e.userChoice.then(function (choiceResult) {

        console.log(choiceResult.outcome);

        if (choiceResult.outcome == 'dismissed') {
          console.log('User cancelled home screen install');
        }
        else {
          console.log('User added to home screen');
        }
      });
    });
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

