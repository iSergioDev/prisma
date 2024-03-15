import React from 'react'
import '../../index.css'

export const NumberInput = ({ text, min, name, value, handle, step = 1 }) => {
  return (
    <>
      <label className='labelForm' htmlFor={name}>
        {text}
      </label>
      <input
        className='inputForm'
        id={name}
        name={name}
        onChange={handle}
        type='number'
        value={value}
        min={min}
        step={step}
      />
    </>
  )
}
