import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import mode, * as modeActions from './mode'

export const actions = {
  ...modeActions,
}

const reducer = combineReducers({
  mode,
})

export function wrap(component) {
  const store = createStore(reducer, {})
  return <Provider store={store}>{component}</Provider>
}
