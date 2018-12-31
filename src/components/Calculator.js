import React from 'react'
import { connect } from 'react-redux'

import NumberField from './NumberField'
import * as k from '../constants'
import { actions } from '../state'

const fieldNamesByMode = {
  [k.INSTALLMENT]: [k.PRICE, k.DEPOSIT, k.LENGTH, k.INTEREST],
  [k.INTEREST]: [k.PRICE, k.DEPOSIT, k.LENGTH, k.INSTALLMENT],
}

const fieldProps = {
  [k.DEPOSIT]: { label: 'Entrada' },
  [k.INSTALLMENT]: { label: 'Valor da parcela' },
  [k.INTEREST]: { label: 'Taxa de juros' },
  [k.LENGTH]: { label: 'Número de parcelas' },
  [k.PRICE]: { label: 'Valor à vista' },
  [k.TOTAL]: { label: 'Total a prazo' },
}

class Calculator extends React.Component {
  handleChange = event => {
    const { name, value } = event.target
    this.props.onChange(name, value)
  }

  render() {
    const { mode, values, onClear, onCalculate } = this.props
    const fieldNames = fieldNamesByMode[mode]
    return (
      <form className="Calculator">
        {fieldNames.map(name => (
          <NumberField
            key={name}
            name={name}
            value={values[name]}
            onChange={this.handleChange}
            {...fieldProps[name]}
          />
        ))}
        <button className="Calculator-button" type="button" onClick={onClear}>
          Limpar
        </button>
        <button
          className="Calculator-button primary"
          type="button"
          onClick={onCalculate}
        >
          Calcular
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  mode: state.mode,
  values: state.values,
})

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(actions.setValue(name, value)),
  onClear: () => dispatch(actions.clearValues()),
  onCalculate: () => dispatch(actions.calculateResults()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)
