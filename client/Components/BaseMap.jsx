import React, {Component} from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import {fetchHotspots, fetchLinks} from './WifiMarkers'

const MyMap = withScriptjs(withGoogleMap(
  class extends Component {
    async componentDidMount() {
      this.setState({wifi: await fetchHotspots()})
    }

    render() {
      const {wifi='Loading...'} = this.state || {}
      return <GoogleMap
          defaultZoom={13}
          defaultCenter={{
            lat: 40.7589,
            lng: -73.9851
          }}
        >{
          this.props.location.pathname.includes('wifi') && wifi
        }</GoogleMap>
    }
  }
))

export default class BaseMap extends Component{
  constructor(props){
    super(props)
    // this.state = {hotspots: null}
  }

  render(){
    return(
      <MyMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBlmcgDIEub9IcrKrha6IN5NGCwXoHGbgw&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location = {this.props.location}
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
