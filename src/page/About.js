/**
 * Created by shuding on 7/23/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

export default class extends Component {
  render() {
    return (
      <DocumentTitle title="Human Learn | About">
        <div>
          <section className="hero is-dark is-bold is-bg">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">About Us</h1>
                <h2 className="subtitle">Human Learn</h2>
              </div>
            </div>
          </section>
          <section className='section'>
            <div className='container'>
              <div className='content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur consequatur dignissimos ducimus facilis, nemo
                  porro
                  unde? Aperiam architecto eius eveniet id molestias, quidem
                  vitae. Consequuntur libero, molestias? Architecto, esse,
                  vero?</p>
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }
}
