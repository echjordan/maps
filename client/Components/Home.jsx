import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";
import { fetchHotspots, fetchLinks } from './WifiMarkers'
import {dropIns, homeBases} from './Shelters'
import Sidebar from './Sidebar'

const MyMap = withScriptjs(withGoogleMap(
  class extends Component {
    constructor() {
      super()
      this.state = {
        wifi: 'Loading...',
        links: 'Loading...',
        dropIns: 'Loading ...',
        geolocation: null,
        refs : {},
        onZoomChange: null
      }
      // this.getGeolocation = this.getGeolocation.bind(this)
      this.onMapMounted = this.onMapMounted.bind(this)
      this.onZoomChanged = this.onZoomChanged.bind(this)

    }

    onMapMounted(ref){

      this.state.refs.map = ref
      console.log(this.state.refs)
    }


    onZoomChanged(){
      this.state.refs.map.fitBounds()
    }
    // // componentWillMount(){
    //   const refs= {
    //     map:null
    //   }
    //   this.setState({
    //     onMapMounted: ref => {
    //       console.log('this is the ref', ref)
    //       refs.map = ref
    //       return refs
    //     }
    //   })
    // }

    async componentDidMount() {
      this.setState({
        wifi: await fetchHotspots(),
        links: await fetchLinks(),
        dropIns: await dropIns(),
        homeBases: await homeBases(),
        geolocation: await this.getGeolocation(),
      })

    }


    //EMPTY OUT STATE ON CHANGE OF VIEW
    componentWillUnmount() {
      this.setState({})
    }

    async getGeolocation() {
         await navigator.geolocation.getCurrentPosition(pos => {
          return { lat: pos.coords.latitiude, lng: pos.coords.longitude }
        })
    }
    //Geolocation doesnt work
    render() {
      const { wifi, links, geolocation, dropIns, homeBases } = this.state
      return <GoogleMap
        ref={this.onMapMounted}
        onZoomChanged={this.onZoomChanged}
        defaultZoom={15}
        defaultCenter={geolocation || { lat: 40.7589, lng: -73.9851 }}
      >
          <Switch>
          <Route exact path ='/map/wifi' render = {() => wifi} />
          <Route exact path='/map/links' render={() => links} />
          <Route exact path='/map/dropins' render={() => <div>
            {dropIns}
            {homeBases}
            </div>
          }/>
          </Switch>
      </GoogleMap>
    }
  }
))

export default class Home extends Component {
  render() {
    // console.log(this.state)
    // console.log('BaseMap props', this.props)
    return (
      <div className='section'>
        <div className="columns">
            <Sidebar {...this.props}/>
          <div className="column">
            <MyMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBlmcgDIEub9IcrKrha6IN5NGCwXoHGbgw&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `800px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
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
