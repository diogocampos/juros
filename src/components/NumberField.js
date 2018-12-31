import React from 'react'

function NumberField(props) {
  const { label, name, value, onChange } = props
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

export default NumberField
