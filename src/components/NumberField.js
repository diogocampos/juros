import React from 'react'

function NumberField(props) {
  const { label } = props
  return (
    <label className="NumberField">
      {label}
      <input className="NumberField-input" type="text" pattern="[0-9]*" />
    </label>
  )
}

export default NumberField
