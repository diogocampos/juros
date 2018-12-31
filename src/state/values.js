import { CLEAR_VALUES, SET_VALUE } from './actionTypes'
import { DEPOSIT, INSTALLMENT, INTEREST, LENGTH, PRICE } from '../constants'

// ACTIONS

export const clearValues = () => ({ type: CLEAR_VALUES })
export const setValue = (name, value) => ({ type: SET_VALUE, name, value })

// REDUCER

const defaultState = {
  [DEPOSIT]: 0,
  [INSTALLMENT]: 0,
  [INTEREST]: 0,
  [LENGTH]: 0,
  [PRICE]: 0,
}

export default function values(state = defaultState, action) {
  switch (action.type) {
    case CLEAR_VALUES:
      return defaultState

    case SET_VALUE:
      const { name, value } = action
      if (Object.keys(defaultState).indexOf(name) < 0) return state
      return { ...state, [name]: value || defaultState[name] }

    default:
      return state
  }
}
