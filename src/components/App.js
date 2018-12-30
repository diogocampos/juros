import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../state'

function App(props) {
  const { mode, switchToInstallmentMode, switchToInterestMode } = props
  return (
    <div className="App">
      <nav>
        <button onClick={switchToInterestMode}>Juros</button>
        <button onClick={switchToInstallmentMode}>Parcela</button>
      </nav>
      <p>{mode}</p>
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
