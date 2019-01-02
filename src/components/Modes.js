import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import './Modes.css'
import { DollarSignIcon, PercentageIcon } from './icons'
import { INSTALLMENT, INTEREST } from '../constants'
import { actions } from '../state'

const modes = [
  { mode: INTEREST, label: 'Juros', Icon: PercentageIcon },
  { mode: INSTALLMENT, label: 'Parcela', Icon: DollarSignIcon },
]

function Modes(props) {
  const { mode: currentMode, onChange } = props
  return (
    <div className="Modes">
      {modes.map(({ mode, label, Icon }) => (
        <button
          key={mode}
          className={classNames('Modes-mode', mode === currentMode && 'active')}
          onClick={() => mode !== currentMode && onChange(mode)}
        >
          <Icon className="Modes-icon" />
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
)(Modes)
