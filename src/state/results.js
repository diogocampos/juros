import { CLEAR_VALUES, SET_MODE, SET_RESULTS, SET_VALUE } from './actionTypes'
import calculate from './calculate'

// ACTIONS

const setResults = results => ({ type: SET_RESULTS, results })

export const calculateResults = () => (dispatch, getState) => {
  const { mode, values } = getState()
  try {
    var results = calculate(mode, values)
  } catch {
    results = 'error'
  }
  dispatch(setResults(results))
}

// REDUCER

const defaultState = null

export default function results(state = defaultState, action) {
  switch (action.type) {
    case SET_RESULTS:
      return action.results

    case CLEAR_VALUES:
    case SET_MODE:
    case SET_VALUE:
      return defaultState

    default:
      return state
  }
}
