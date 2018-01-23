import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { fetchHotspots, fetchLinks } from './WifiMarkers'

const MyMap = withScriptjs(withGoogleMap(
  class extends Component {
    constructor() {
      super()
      this.state = {
        wifi: 'Loading...',
        links: 'Loading links...',
        geolocation: null
      }
    }

    async componentDidMount() {
      this.setState({
        wifi: await fetchHotspots(),
        links: await fetchLinks(),
        geolocation: await this.getGeolocation()
      })
    }

    //EMPTY OUT STATE ON CHANGE OF VIEW
    componentWillUnmount() {
      this.setState({})
    }

    async getGeolocation() {
      if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(pos => {
          return { lat: pos.coords.latitiude, lng: pos.coords.longitude }
        }
        )
      }
    }


    render() {
      const { wifi, links, geolocation } = this.state || {}
      return <GoogleMap
        defaultZoom={15}
        defaultCenter={geolocation ? geolocation : {
          lat: 40.7589,
          lng: -73.9851
        }}
      >

        {/*MAKE THIS WITH REACT ROUTER */}
        {this.props.location.pathname.includes('wifi') && wifi}
        {this.props.location.pathname.includes('wifi') && links}

      </GoogleMap>
    }
  }
))

export default class BaseMap extends Component {
  render() {
    return (
      <div className='container'>
        <div className="columns">
          <div className="column is-one-fifth">
            <aside className="menu">
              <p className="menu-label">
                Menu
            </p>
              <ul className="menu-list">
                <li><a className={this.props.location.pathname.includes('wifi') ? 'is-active' : ''}>Wifi</a></li>
                <li><a>Parking Tickets</a></li>
                <li><a>Payroll</a></li>
                <li><a>Noise Complaints</a></li>
                <li><a>Occupancies</a></li>
              </ul>
            </aside>
          </div>
          <div className="column">
            <MyMap
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBlmcgDIEub9IcrKrha6IN5NGCwXoHGbgw&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `800px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              location={this.props.location}
            />
          </div>
        </div>
      </div>
    )
  }
}


      // if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(pos => {lat: pos.coords.latitude, lng: pos.coords.longitude})

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
