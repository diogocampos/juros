import React from 'react'
import { connect } from 'react-redux'

import NumberField from './NumberField'
import * as k from '../constants'

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
  render() {
    const { mode } = this.props
    const fieldNames = fieldNamesByMode[mode]
    return (
      <form className="Calculator">
        {fieldNames.map(name => (
          <NumberField key={name} name={name} {...fieldProps[name]} />
        ))}
        <button className="Calculator-button" type="button">
          Limpar
        </button>
        <button className="Calculator-button primary" type="button">
          Calcular
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  mode: state.mode,
})

export default connect(mapStateToProps)(Calculator)
