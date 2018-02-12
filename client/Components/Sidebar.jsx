import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShelterInfo from "./ShelterInfo"

export default class Sidebar extends Component{
  render(){
    console.log('this.props in sidebar', this.props)
    return(
      <div className="column is-one-fifth" id="sidebar">
      <aside className="menu">
        <p className="menu-label">Menu</p>
        <ul className="menu-list">
          <li><Link to="/map/wifi" className={this.props.location.pathname.includes('wifi') ? 'is-active' : ''}>
          Wifi Hotspots</Link></li>
          <li><Link to="/map/links" className={this.props.location.pathname.includes('links') ? 'is-active' : ''}>
          Link NYC Stations</Link></li>
            <li onClick={() => console.log('click handler for shelters fired')}><Link to="/map/dropins" className={this.props.location.pathname.includes('dropins') ? 'is-active' : ''}>
          Shelters</Link></li>
        </ul>
      </aside>
      <hr/>
      {this.props.location.pathname.includes('dropins') ?
      <div className = "card">
        <header className="card-header"></header>
        <div className="card-content">
          <div className="content">
               <ShelterInfo />
        </div>
      </div>
          </div> : ''}
      </div>
    )
  }
}
