import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import { INSTALLMENT, INTEREST } from '../constants'
import { actions } from '../state'

const modes = [
  { mode: INTEREST, label: 'Juros' },
  { mode: INSTALLMENT, label: 'Parcela' },
]

function ModeSwitcher(props) {
  const { mode: currentMode, onChange } = props
  return (
    <div className="ModeSwitcher">
      {modes.map(({ mode, label }) => (
        <button
          key={mode}
          className={classNames(
            'ModeSwitcher-mode',
            mode === currentMode && 'active'
          )}
          onClick={() => onChange(mode)}
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

const mapDispatchToProps = dispatch => ({
  onChange: mode => dispatch(actions.setMode(mode)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModeSwitcher)
