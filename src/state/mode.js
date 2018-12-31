import { SET_MODE } from './actionTypes'
import { INSTALLMENT, INTEREST } from '../constants'

const modes = [INSTALLMENT, INTEREST]

// ACTIONS

export const setMode = mode => ({ type: SET_MODE, mode })

// REDUCER

const defaultState = INTEREST

export default function mode(state = defaultState, action) {
  switch (action.type) {
    case SET_MODE:
      if (modes.indexOf(action.mode) < 0) return state
      return action.mode

    default:
      return state
  }
}
