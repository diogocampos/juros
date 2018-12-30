import React from 'react'
import { connect } from 'react-redux'

import Calculator from './Calculator'
import { actions } from '../state'

function App(props) {
  const { switchToInstallmentMode, switchToInterestMode } = props

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

export default connect(
  null,
  actions
)(App)
