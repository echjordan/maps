import React, {Component} from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const MyMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{
        lat: 40.7589,
        lng: -73.9851
      }}
    >

      {props.isMarkerShown && <Marker
        position={{
          lat: 40.7589,
          lng: -73.9851
        }}
      />}

    </GoogleMap>
))



export default class BaseMap extends Component{
  render(){
    return(
      <MyMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBlmcgDIEub9IcrKrha6IN5NGCwXoHGbgw&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}



      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(function (position) {
      //     var currentLocation = {
      //       lat: position.coords.latitude,
      //       lng: position.coords.longitude
      //     };
      //     map.setCenter(pos);
      //     map.setZoom(16)
      //   });
      // }

    //part of service worker implementation
    // window.addEventListener('beforeinstallprompt', function (e) {
    //   // beforeinstallprompt Event fired
    //   // e.userChoice will return a Promise.
    //   // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
    //   e.userChoice.then(function (choiceResult) {
    //     console.log(choiceResult.outcome);
    //     if (choiceResult.outcome == 'dismissed') {
    //       console.log('User cancelled home screen install');
    //     } else {
    //       console.log('User added to home screen');
    //     }
    //   });
    // });
  // }
