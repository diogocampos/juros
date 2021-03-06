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

const rootReducer = combineReducers({
  mode,
  values,
  results,
})

function reducer(state, action) {
  const newState = rootReducer(state, action)
  if (newState !== state) saveState(newState)
  return newState
}

export function wrap(component) {
  const initialState = loadState() || {}
  const store = createStore(reducer, initialState, applyMiddleware(thunk))
  return <Provider store={store}>{component}</Provider>
}

// Storage

const STATE = 'state'

const saveState = debounce(state => {
  localStorage.setItem(STATE, JSON.stringify(state))
}, 1000)

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STATE) || '')
  } catch {}
}

// Helpers

function debounce(fn, delay) {
  let timeout = null
  return (...args) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
      timeout = null
    }, delay)
  }
}
