import React, { Component } from 'react'
import {withRouter} from 'react-router'

let Main = () =>
  <div id="main" className="container">
    <div className="columns">
      <div id="home-column" className="column">
        <h5 className="interest">I'm interested in finding</h5>
        <p><a href="/map/wifi">finding hotspots</a></p>
        <p><a href="/map/links">finding linkNYC stations</a></p>
        <p><a href="#">a place to sleep  </a></p>
      </div>
    </div>
  </div>


export default Main = withRouter(Main)
