import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShelterInfo from "./ShelterInfo"

export default class Sidebar extends Component{
  constructor(){
    super()
    this.handleZoom = this.handleZoom.bind(this)
  }

  handleZoom(zoomFor){
    let collection = this.props.homeBases
    const sortedPoints = _.sortBy(collection, ['props.position.lat', 'props.position.lng'])
    console.log('sortedPoints', sortedPoints)
    let north = sortedPoints[sortedPoints.length - 1].props.position.lat
    let south = sortedPoints[0].props.position.lat
    let east = sortedPoints[sortedPoints.length - 1].props.position.lng
    let west = sortedPoints[0].props.position.lng
    this.props.refs.map.fitBounds({ east, north, south, west })
  }

  render(){
    const dropInsView = this.props.location.pathname.includes('dropins')
    const wifiView = this.props.location.pathname.includes('wifi')
    const linksView = this.props.location.pathname.includes('links')
    return(
      <div className="column is-one-fifth" id="sidebar">
      <aside className="menu">
        <p className="menu-label">Menu</p>
          <ul className="menu-list">
            <li>
              <Link to="/map/wifi" className={wifiView ? 'is-active' : ''}>
                Wifi Hotspots
              </Link>
            </li>
            <li>
              <Link to="/map/links" className={linksView ? 'is-active' : ''}>
                Link NYC Stations
              </Link>
            </li>
            <li onClick={() => this.handleZoom()}>
              <Link to="/map/dropins" className={dropInsView ? 'is-active' : ''}>
                Shelters
              </Link>
            </li>
          </ul>
      </aside>
      <hr/>
      {dropInsView ?
          <div className="card">
            <header className="card-header"></header>
            <div className="card-content">
              <div className="content">
                <ShelterInfo />
              </div>
            </div>
          </div>
        : ''}
      </div>
    )
  }
}
