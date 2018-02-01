import React, { Component } from 'react'

const homeBaseInfo = <p>Homebase is a homelessness prevention program administered by Community-Based Organizations (CBOs) in high-need neighborhoods. The CBOs provide casework services and also help individuals and families locate existing community-based resources such as job training, child care, and anti-eviction legal services. \n \n You are strongly encouraged to call your nearest HomeBase location before visiting.Depending on your address and situation, you may be advised to go to a different HomeBase office in your borough.</p>

const dropInInfo = <p>Centers that provide hot meals, showers, medical help and a place to sleep.</p>

export default class Sidebar extends Component{
  render(){
    return(
      <div className="column is-one-fifth" id="sidebar">
      <aside className="menu">
        <p className="menu-label">Menu</p>
        <ul className="menu-list">
          <li><a href="/map/wifi" className={this.props.location.pathname.includes('wifi') ? 'is-active' : ''}>Wifi Hotspots</a></li>
          <li><a href="/map/links" className={this.props.location.pathname.includes('links') ? 'is-active' : ''}>Link NYC Stations</a></li>
          <li><a href="/map/dropins" className={this.props.location.pathname.includes('dropins') ? 'is-active' : ''}>Shelters</a></li>
        </ul>
      </aside>
      <hr/>
      <div className = "card">
        <header className="card-header">
        <p className="card-header-title">
        Showing:
        </p>
        </header>
        <div className="card-content">
          <div className="content">
              <h3 id="homebase-title">Homebase Locations</h3>
              <img src="https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_23-32.png" id="homebase"/>
              {this.props.location.pathname.includes('dropins') ? homeBaseInfo : ''}
              <hr />
              <h3 id="dropsin-title"> Drop In Centers</h3>
              <img src="https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_24-32.png"/>
              {this.props.location.pathname.includes('dropins') ? dropInInfo : ''}
          </div>

        </div>
      </div>
      </div>
    )
  }
}
