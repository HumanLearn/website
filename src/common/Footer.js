/**
 * Created by shuding on 7/24/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='content has-text-centered'>
            <p><Link to='/'>Human Learn</Link> @ 2016</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </footer>
    )
  }
}
