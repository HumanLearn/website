import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'bulma'
import './index.css'

import FontFaceObserver from 'fontfaceobserver'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

let font = new FontFaceObserver('Space Mono')

font.load().then(() => {
  document.body.className += ' font-loaded'
})
