/**
 * Created by shuding on 7/24/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'
import { Icon } from 'react-fa'

import Navbar from './Navbar'
import Footer from './Footer'

export default class extends Component {
  render() {
    return (
      <div>
        <section className='container'>
          <Navbar/>
        </section>
        {this.props.children}
        <section className='hero'>
          <div className='hero-body'>
            <div className='container'>
              <nav className="level is-mobile">
                <div className="level-item has-text-centered">
                  <p className="heading">Facebook</p>
                  <a className="icon is-large reset-color" href="https://www.facebook.com/humanlearn" target="_blank">
                    <Icon name='facebook'/>
                  </a>
                </div>
                <div className="level-item has-text-centered">
                  <p className="heading">Twitter</p>
                  <a className="icon is-large reset-color" href="https://www.twitter.com/HumanLearn" target="_blank">
                    <Icon name='twitter'/>
                  </a>
                </div>
                <div className="level-item has-text-centered">
                  <p className="heading">GitHub</p>
                  <a className="icon is-large reset-color" href="https://www.github.com/HumanLearn" target="_blank">
                    <Icon name='github'/>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}
