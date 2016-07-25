/**
 * Created by shuding on 7/23/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import ReactMarkdown from 'react-markdown'

import { postList, getPost } from '../helper/post'

const posts = postList('blog')

export default class extends Component {
  constructor(props) {
    super()

    let { page, count } = props

    page = page || 0
    count = count || 5

    this.state = {
      show: posts.slice(page * count, page * count + count),
      count: posts.length,
      current: page,
      content: [],
    }
  }

  componentWillMount() {
    this.fetchContent()
  }

  fetchContent(index) {
    if (typeof index === 'undefined') {
      this.state.show.forEach((file, index) => {
        getPost(file).then(res => {
          this.state.content[index] = res
          this.forceUpdate()
        }).catch()
      })
    } else {
      getPost(this.state.show[index]).then(res => {
        this.state.content[index] = res
        this.forceUpdate()
      }).catch()
    }
  }

  render() {
    return (
      <DocumentTitle title="Human Learn | Blog">
        <div>
          <section className="hero is-dark is-bold is-bg">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Blog</h1>
                <h2 className="subtitle">Human Learn</h2>
              </div>
            </div>
          </section>
          <section className='section'>
            <div className='container'>
              {this.state.content.map((content, index) => (
                <div className='box' key={`blog-${index}`}>
                  <div className='content'>
                    <ReactMarkdown source={content} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }
}
