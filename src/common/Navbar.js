/**
 * Created by shuding on 7/24/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render() {
    return (
      <header className='nav'>
        <div className='nav-left'>
          <Link className='nav-item' to='/'>Human Learn</Link>
        </div>
        <div className='nav-right nav-menu'>
          <Link className='nav-item' to='/news'>News</Link>
          <Link className='nav-item' to='/blog'>Blog</Link>
          <Link className='nav-item' to='/about'>About</Link>
          <Link className='nav-item' to='/faq'>FAQ</Link>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </header>
    )
  }
}
