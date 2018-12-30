import React from 'react'
import { connect } from 'react-redux'

import { actionCreators } from '../state'

function ModeSwitcher(props) {
  const { switchToInstallmentMode, switchToInterestMode } = props
  return (
    <div>
      <button onClick={switchToInterestMode}>Juros</button>
      <button onClick={switchToInstallmentMode}>Parcela</button>
    </div>
  )
}

export default connect(
  null,
  actionCreators
)(ModeSwitcher)
