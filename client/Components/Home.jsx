import React, { Component } from 'react'
import MyMap from './Map'
import Sidebar from './Sidebar'
import { fetchHotspots, fetchLinks } from './WifiMarkers'
import { dropIns, homeBases } from './Shelters'


export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      wifi: 'Loading...',
      links: 'Loading...',
      dropIns: 'Loading ...',
      homeBases: 'Loading ...',
      refs: {}
    }
  }

  async componentDidMount() {
    this.setState({
      wifi: await fetchHotspots(),
      links: await fetchLinks(),
      dropIns: await dropIns(),
      homeBases: await homeBases()
    })
  }

  componentWillUnmount() {
    this.setState({})
  }

  render() {
    return (
      <div className='section'>
        <div className="columns">
          <Sidebar
            {...this.props}
            wifi={this.state.wifi}
            links={this.state.links}
            dropIns={this.state.dropIns}
            homeBases={this.state.homeBases}
            refs={this.state.refs}
          />
          <div className="column">
            <MyMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBlmcgDIEub9IcrKrha6IN5NGCwXoHGbgw&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `800px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              wifi = {this.state.wifi}
              links = {this.state.links}
              dropIns = {this.state.dropIns}
              homeBases = {this.state.homeBases}
              refs = {this.state.refs}
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
