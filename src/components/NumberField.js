import React from 'react'

class NumberField extends React.Component {
  render() {
    const { label, name, value, onChange } = this.props
    return (
      <label className="NumberField">
        {label}
        <input
          className="NumberField-input"
          type="text"
          pattern="[0-9]*"
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    )
  }
}

export default NumberField
