import { DEPOSIT, INSTALLMENT, INTEREST, LENGTH, PRICE } from '../constants'

// ACTIONS

const CLEAR_VALUES = 'values/clear-values'
const SET_VALUE = 'values/set-value'

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
      return { ...state, [action.name]: action.value }

    default:
      return state
  }
}
