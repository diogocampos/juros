import React from 'react'

import './NumberField.css'
import { formatNumber, parseDigits } from './format'
import * as icons from './icons'

const MAX_DIGITS = 15

class NumberField extends React.Component {
  inputRef = React.createRef()

  handleChange = event => {
    const digits = event.target.value.replace(/[^\d]/g, '')
    if (digits.length > MAX_DIGITS) return

    const value = parseDigits(digits, this.props.decimals)
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
    const { name, label, icon, value, decimals } = this.props
    const Icon = icons[icon]
    return (
      <label className="NumberField">
        <span className="NumberField-label">{label}</span>
        <div className="NumberField-control">
          <input
            className="NumberField-input"
            type="text"
            pattern="[0-9]*" // Show numeric keyboard on iOS
            inputMode="decimal" // Show numeric keyboard on Android
            placeholder={formatNumber(0, decimals)}
            name={name}
            value={value ? formatNumber(value, decimals) : ''}
            onChange={this.handleChange}
            onClick={this.handleFocus}
            onFocus={this.handleFocus}
            onKeyDown={this.handleKeyDown}
            ref={this.inputRef}
          />
          {Icon && <Icon className="NumberField-icon" />}
        </div>
      </label>
    )
  }
}

export default NumberField
