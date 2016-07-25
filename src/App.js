import React, { Component } from 'react'
import { Router, Route, Link, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

// Routers
import Home from './page/Home'
import News from './page/News'
import Blog from './page/Blog'
import About from './page/About'
import FAQ from './page/FAQ'

// Components
import Container from './common/Container'

export default class extends Component {
  render() {
    return (
      <Router history={useRouterHistory(createHashHistory)({queryKey: false})}>
        <Route component={Container}>
          <Route path='/' component={Home}/>
          <Route path='/news' component={News}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/about' component={About}/>
          <Route path='/faq' component={FAQ}/>
        </Route>
      </Router>
    )
  }
}
