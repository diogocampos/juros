import React from 'react'
import { connect } from 'react-redux'

import { fieldProps } from '../constants'

function Results(props) {
  const { results } = props
  if (!results) return null

  return !results.error ? (
    <ul>
      {Object.keys(results).map(name => (
        <li key={name}>
          {fieldProps[name].label}: {results[name]}
        </li>
      ))}
    </ul>
  ) : (
    <p>Erro: Verifique os valores preenchidos.</p>
  )
}

const mapStateToProps = state => ({
  results: state.results,
})

export default connect(mapStateToProps)(Results)
