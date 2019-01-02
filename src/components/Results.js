import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import './Results.css'
import { formatNumber } from './format'
import { fieldProps } from '../constants'

function Results(props) {
  const { results } = props
  if (!results) return null

  return (
    <div className={classNames('Results', results === 'error' && 'error')}>
      {results !== 'error' ? (
        Object.keys(results).map(name => (
          <Result key={name} {...fieldProps[name]} value={results[name]} />
        ))
      ) : (
        <Result label="Erro" value="Verifique os valores preenchidos." />
      )}
    </div>
  )
}

function Result(props) {
  const { label, prefix, value, decimals, suffix } = props
  return (
    <div className="Results-result">
      <h3 className="Results-label">{label}</h3>
      <p className="Results-value">
        {prefix && <span className="Results-unit">{prefix}</span>}
        {typeof value === 'number' ? formatNumber(value, decimals) : value}
        {suffix && <span className="Results-unit">{suffix}</span>}
      </p>
    </div>
  )
}

const mapStateToProps = state => ({
  results: state.results,
})

export default connect(mapStateToProps)(Results)
