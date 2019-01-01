import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { wrap } from '../state'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(wrap(<App />), div)
  ReactDOM.unmountComponentAtNode(div)
})
