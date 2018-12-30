import { INSTALLMENT_MODE, INTEREST_MODE } from '../constants'

// ACTIONS

const SET_MODE = 'mode/set-mode'
const setMode = mode => ({ type: SET_MODE, mode })

export const switchToInstallmentMode = () => setMode(INSTALLMENT_MODE)
export const switchToInterestMode = () => setMode(INTEREST_MODE)

// REDUCER

const defaultState = INTEREST_MODE

export default function mode(state = defaultState, action) {
  switch (action.type) {
    case SET_MODE:
      return action.mode
    default:
      return state
  }
}
