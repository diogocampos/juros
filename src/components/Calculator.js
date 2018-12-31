import React from 'react'
import { connect } from 'react-redux'

import NumberField from './NumberField'
import * as k from '../constants'
import { actionCreators } from '../state'

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
    this.props.setValue(name, value)
  }

  render() {
    const { mode, values, clearValues, calculateResults } = this.props
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
        <button
          className="Calculator-button"
          type="button"
          onClick={clearValues}
        >
          Limpar
        </button>
        <button
          className="Calculator-button primary"
          type="button"
          onClick={calculateResults}
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

export default connect(
  mapStateToProps,
  actionCreators
)(Calculator)
