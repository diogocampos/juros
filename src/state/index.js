import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import mode, * as modeActions from './mode'
import values, * as valuesActions from './values'

export const actions = {
  ...modeActions,
  ...valuesActions,
}

const reducer = combineReducers({
  mode,
  values,
})

export function wrap(component) {
  const store = createStore(reducer, {})
  return <Provider store={store}>{component}</Provider>
}
