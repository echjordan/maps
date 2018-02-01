import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BaseMap from "./Components/BaseMap"
import Main from "./Components/Main"

export default () =>
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/map' component={BaseMap} />
      </Switch>
    </Router>
