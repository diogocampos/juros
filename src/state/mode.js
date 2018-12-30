import { INSTALLMENT, INTEREST } from '../constants'

// ACTIONS

const SET_MODE = 'mode/set-mode'

const setMode = mode => ({ type: SET_MODE, mode })

export const switchToInstallmentMode = () => setMode(INSTALLMENT)
export const switchToInterestMode = () => setMode(INTEREST)

// REDUCER

const defaultState = INTEREST

export default function mode(state = defaultState, action) {
  switch (action.type) {
    case SET_MODE:
      return action.mode

    default:
      return state
  }
}
