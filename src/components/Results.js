import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import './Results.css'
import { formatNumber } from './format'
import { fieldProps } from '../constants'

function Results(props) {
  const { results } = props
  return (
    <div className={classNames('Results', results === 'error' && 'error')}>
      {!results ? (
        <Message text="Preencha os valores e clique em Calcular." />
      ) : results === 'error' ? (
        <Message title="Erro" text="Verifique os valores preenchidos." />
      ) : (
        Object.keys(results).map(name => (
          <Number key={name} {...fieldProps[name]} value={results[name]} />
        ))
      )}
    </div>
  )
}

function Number(props) {
  const { label, prefix, value, decimals, suffix } = props
  return (
    <div className="Results-item">
      <h3 className="Results-label">{label}</h3>
      <p className="Results-content">
        {prefix && <span className="Results-unit">{prefix}</span>}
        {formatNumber(value, decimals)}
        {suffix && <span className="Results-unit">{suffix}</span>}
      </p>
    </div>
  )
}

function Message(props) {
  const { title, text } = props
  return (
    <div className="Results-item">
      {title && <h3 className="Results-label">{title}</h3>}
      <p className="Results-content is-message">{text}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  results: state.results,
})

export default connect(mapStateToProps)(Results)
