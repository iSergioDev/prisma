import React from 'react'
import '../../index.css'

export const TextInput = ({ text, placeHolder, name, value, handle }) => {
  return (
    <>
      <label className='labelForm' htmlFor={name}>
        {text.toUpperCase()}
      </label>
      <input
        autoComplete='off'
        className='inputForm'
        name={name}
        id={name}
        onChange={handle}
        placeholder={placeHolder}
        type='text'
        value={value}
        required
      />
    </>
  )
}
