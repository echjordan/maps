import React, { Component } from 'react'
import {withRouter} from 'react-router'

let Main = () =>
  <div id="main" className="container">
    <div className="columns">
      <div id="home-column" className="column">
        <h5 className="interest">I'm interested in </h5>
        <p><a href="/map/wifi">📶 free wifi  </a></p>
      </div>
    </div>
  </div>


export default Main = withRouter(Main)
