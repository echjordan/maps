import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { Route, Switch } from 'react-router-dom'

const MyMap = withScriptjs(withGoogleMap(
  class extends Component {
    constructor() {
      super()
      this.state = {
        geolocation: null
      }
      this.onMapMounted = this.onMapMounted.bind(this)
    }

    onMapMounted(ref) {
      this.props.refs.map = ref
    }

    async componentDidMount() {
      let cb = pos => {
        this.setState({
          geolocation: { lat: pos.coords.latitude, lng: pos.coords.longitude }
        })
      }
      let errCb = err => console.log(err.status, err.code)
      await navigator.geolocation.getCurrentPosition(cb, errCb)
    }

    render() {
      const { hotspots, links, dropIns, homeBases } = this.props
      const {geolocation} = this.state
      return <GoogleMap
        ref={this.onMapMounted}
        defaultZoom={15}
        defaultCenter={{ lat: 40.7589, lng: -73.9851 }}
        center={geolocation}
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
