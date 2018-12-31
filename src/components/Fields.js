import React from 'react'
import { connect } from 'react-redux'

import NumberField from './NumberField'
import { fieldNamesByMode, fieldProps } from '../constants'
import { actions } from '../state'

class Fields extends React.Component {
  handleChange = event => {
    const { name, value } = event.target
    this.props.onChange(name, +value)
  }

  render() {
    const { mode, values, onClear, onCalculate } = this.props
    const fieldNames = fieldNamesByMode[mode]
    return (
      <form className="Fields">
        {fieldNames.map(name => (
          <NumberField
            key={name}
            name={name}
            value={values[name]}
            onChange={this.handleChange}
            {...fieldProps[name]}
          />
        ))}
        <button className="Fields-button" type="button" onClick={onClear}>
          Limpar
        </button>
        <button
          className="Fields-button primary"
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
)(Fields)