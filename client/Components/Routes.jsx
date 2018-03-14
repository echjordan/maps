import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home"
import NavPage from "./NavPage"

export default () =>
    <Router>
      <Switch>
        <Route exact path='/' component={NavPage} />
        <Route path='/map' component={Home} />
      </Switch>
    </Router>
