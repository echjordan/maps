import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";
import { fetchHotspots, fetchLinks } from './WifiMarkers'
import Sidebar from './Sidebar'
import {dropIns, homeBases} from './Shelters'

export const MyMap = withScriptjs(withGoogleMap(
  class extends Component {
    constructor() {
      super()
      this.state = {
        wifi: 'Loading...',
        links: 'Loading links...',
        dropIns: 'Loading ...',
        geolocation: null
      }
      // this.getGeolocation = this.getGeolocation.bind(this)
    }

    async componentDidMount() {
      this.setState({
        wifi: await fetchHotspots(),
        links: await fetchLinks(),
        dropIns: await dropIns(),
        homeBases: await homeBases(),
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

    //Geolocation doesnt work
    render() {
      const { wifi, links, geolocation, dropIns, homeBases } = this.state || {}
      return <GoogleMap
        defaultZoom={15}
        defaultCenter={geolocation ? geolocation : { lat: 40.7589, lng: -73.9851 }}
      >

        <Router>
          <Switch>
          <Route exact path ='/map/wifi' render = {() => wifi} />
          <Route exact path='/map/links' render={() => links} />
          <Route exact path='/map/dropins' render={() => <div>
            {dropIns}
            {homeBases}
            </div>} />
          </Switch>
        </Router>
      </GoogleMap>
    }
  }
))

export default class BaseMap extends Component {
  render() {
    return (
      <div className='container'>
        <div className="columns">
            <Sidebar {...this.props}/>
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
