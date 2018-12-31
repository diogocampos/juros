import React from 'react'

import { formatNumber, parseDigits } from './format'

class NumberField extends React.Component {
  inputRef = React.createRef()

  handleChange = event => {
    const value = parseDigits(event.target.value, this.props.decimals)
    this.props.onChange(this.props.name, value)
  }

  handleFocus = () => {
    setTimeout(() => {
      const input = this.inputRef.current
      const end = input.value.length
      input.setSelectionRange(end, end)
    }, 0)
  }

  handleKeyDown = event => {
    // Ignore arrow keys, Home/End, Page Up/Down
    if (33 <= event.keyCode && event.keyCode <= 40) event.preventDefault()

    // Escape key clears the field
    if (event.keyCode === 27) this.props.onChange(this.props.name)
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
          onClick={this.handleFocus}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
          ref={this.inputRef}
        />
      </label>
    )
  }
}

export default NumberField
