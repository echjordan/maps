const _ = require('lodash')

import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { Route, Switch } from 'react-router-dom'

const MyMap = withScriptjs(withGoogleMap(
  class extends Component {
    constructor() {
      super()
      this.state = {
        geolocation: null,
      }
      this.onMapMounted = this.onMapMounted.bind(this)
      // this.getGeolocation = this.getGeolocation.bind(this)
      // this.onBoundsChanged = this.onBoundsChanged.bind(this)

    }

    onMapMounted(ref) {
      this.props.refs.map = ref
    }

    // onBoundsChanged() {

    // }

    async componentDidMount() {
      this.setState({
        geolocation: await this.getGeolocation(),
      })

    }

    async getGeolocation() {
      await navigator.geolocation.getCurrentPosition(pos => {
        return { lat: pos.coords.latitiude, lng: pos.coords.longitude }
      })
    }

    //Geolocation doesnt work
    render() {
      const { hotspots, links, dropIns, homeBases } = this.props
      const {geolocation} = this.state
      return <GoogleMap
        ref={this.onMapMounted}
        onZoomChanged={this.onZoomChanged}
        defaultZoom={15}
        defaultCenter={geolocation || { lat: 40.7589, lng: -73.9851 }}
      >
        <Switch>
          <Route exact path='/map/wifi' render={() =>  hotspots} />
          <Route exact path='/map/links' render={() => links} />
          <Route exact path='/map/dropins' render={() => <div>
            {dropIns}
            {homeBases}
          </div>
          } />
        </Switch>
      </GoogleMap>
    }
  }
))

export default MyMap
