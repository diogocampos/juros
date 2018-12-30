import React from 'react'
import { connect } from 'react-redux'

import { InstallmentCalculator, InterestCalculator } from './Calculator'
import { INSTALLMENT, INTEREST } from '../constants'
import { actions } from '../state'

const calculators = {
  [INSTALLMENT]: InstallmentCalculator,
  [INTEREST]: InterestCalculator,
}

function App(props) {
  const { mode, switchToInstallmentMode, switchToInterestMode } = props
  const Calculator = calculators[mode]

  return (
    <div className="App">
      <nav>
        <button onClick={switchToInterestMode}>Juros</button>
        <button onClick={switchToInstallmentMode}>Parcela</button>
      </nav>
      <Calculator />
    </div>
  )
}

const mapStateToProps = state => ({
  mode: state.mode,
})

export default connect(
  mapStateToProps,
  actions
)(App)
