import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Main from "./Main.jsx"
import BaseMap from "./BaseMap.jsx"
import Resources from './Resources.jsx'

export default () =>
    <Router>
      <div>
        <Route exact path='/' component={Main} />
        <Route path='/map' component={BaseMap} />
      </div>
    </Router>
