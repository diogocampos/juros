import React from 'react'

import { formatNumber, parseDigits } from './format'

class NumberField extends React.Component {
  handleChange = event => {
    const value = parseDigits(event.target.value, this.props.decimals)
    this.props.onChange(this.props.name, value)
  }

  render() {
    const { label, name, value, ...format } = this.props
    return (
      <label className="NumberField">
        {label}
        <input
          className="NumberField-input"
          type="text"
          pattern="[0-9]*"
          placeholder={formatNumber(0, format)}
          name={name}
          value={value ? formatNumber(value, format) : ''}
          onChange={this.handleChange}
        />
      </label>
    )
  }
}

export default NumberField
