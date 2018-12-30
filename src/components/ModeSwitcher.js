import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import { INSTALLMENT, INTEREST } from '../constants'
import { actionCreators } from '../state'

function ModeSwitcher(props) {
  const { mode, switchToInstallmentMode, switchToInterestMode } = props
  return (
    <div className="ModeSwitcher">
      <button
        className={classNames('mode', mode === INTEREST && 'active')}
        onClick={switchToInterestMode}
      >
        Juros
      </button>
      <button
        className={classNames('mode', mode === INSTALLMENT && 'active')}
        onClick={switchToInstallmentMode}
      >
        Parcela
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  mode: state.mode,
})

export default connect(
  mapStateToProps,
  actionCreators
)(ModeSwitcher)
