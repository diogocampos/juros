import React from 'react'
import { connect } from 'react-redux'

import NumberField from './NumberField'
import { DEPOSIT, INSTALLMENT, INTEREST, LENGTH, PRICE } from '../constants'

// NumberField props
const deposit = { name: DEPOSIT, label: 'Entrada' }
const installment = { name: INSTALLMENT, label: 'Valor da parcela' }
const interest = { name: INTEREST, label: 'Taxa de juros' }
const length = { name: LENGTH, label: 'Número de parcelas' }
const price = { name: PRICE, label: 'Valor à vista' }

const fieldsByMode = {
  [INSTALLMENT]: [price, deposit, length, interest],
  [INTEREST]: [price, deposit, length, installment],
}

function Calculator(props) {
  const { mode } = props
  const fields = fieldsByMode[mode]
  return (
    <form className="Calculator">
      {fields.map(fieldProps => (
        <NumberField key={fieldProps.name} {...fieldProps} />
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

const mapStateToProps = state => ({
  mode: state.mode,
})

export default connect(mapStateToProps)(Calculator)
