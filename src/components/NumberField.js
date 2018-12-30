import React from 'react'

function NumberField(props) {
  const { label } = props
  return (
    <label>
      {label}
      <input type="text" pattern="[0-9]*" />
    </label>
  )
}

export default NumberField
