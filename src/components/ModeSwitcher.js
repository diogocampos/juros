import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import { INSTALLMENT, INTEREST } from '../constants'
import { actionCreators } from '../state'

const modes = [
  { mode: INTEREST, label: 'Juros' },
  { mode: INSTALLMENT, label: 'Parcela' },
]

function ModeSwitcher(props) {
  const { mode: currentMode, setMode } = props
  return (
    <div className="ModeSwitcher">
      {modes.map(({ mode, label }) => (
        <button
          key={mode}
          className={classNames(
            'ModeSwitcher-mode',
            mode === currentMode && 'active'
          )}
          onClick={() => setMode(mode)}
        >
          {label}
        </button>
      ))}
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
