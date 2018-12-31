import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import mode, * as modeActions from './mode'
import values, * as valuesActions from './values'
import results, * as resultsActions from './results'

export const actions = {
  ...modeActions,
  ...valuesActions,
  ...resultsActions,
}

const reducer = combineReducers({
  mode,
  values,
  results,
})

export function wrap(component) {
  const store = createStore(reducer, {}, applyMiddleware(thunk))
  return <Provider store={store}>{component}</Provider>
}
