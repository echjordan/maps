import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Components/Home"
import Main from "./Components/Main"

export default () =>
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/map' component={Home} />
      </Switch>
    </Router>
