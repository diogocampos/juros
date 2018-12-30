import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../state'

class App extends Component {
  render() {
    const { mode, switchToInstallmentMode, switchToInterestMode } = this.props
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
}

const mapStateToProps = state => ({
  mode: state.mode,
})

export default connect(
  mapStateToProps,
  actions
)(App)
