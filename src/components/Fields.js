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

  handleReset = event => {
    event.preventDefault()
    this.props.onReset()
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit()
  }

  render() {
    const { mode, values } = this.props
    const fieldNames = fieldNamesByMode[mode]
    return (
      <form
        className="Fields"
        onReset={this.handleReset}
        onSubmit={this.handleSubmit}
      >
        {fieldNames.map(name => (
          <NumberField
            key={name}
            name={name}
            value={values[name]}
            onChange={this.handleChange}
            {...fieldProps[name]}
          />
        ))}
        <button className="Fields-button" type="reset">
          Limpar
        </button>
        <button className="Fields-button primary" type="submit">
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
  onReset: () => dispatch(actions.clearValues()),
  onSubmit: () => dispatch(actions.calculateResults()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fields)
