import React, { Component } from 'react'
import {withRouter} from 'react-router'

let Main = () =>
  <div className="section">
  <div id="home-column">
    <p className="title is-5">I'm interested in finding</p>
    <a href="/map/wifi">hotspots</a>
    <a href="/map/links">Link NYC stations</a>
    <a href="/map/dropins">a place to sleep  </a>
  </div>
  </div>


export default Main = withRouter(Main)
