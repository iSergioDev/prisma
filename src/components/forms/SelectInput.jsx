import React from 'react'

export const SelectInput = ({ text, name, value, arreglo, handleChange }) => {
  const handleSelectChange = (e) => {
    handleChange(e) // Llama al controlador de cambio proporcionado desde el componente padre
  }

  return (
    <>
      <label className='labelForm' htmlFor={text}>
        {text}
      </label>
      <select
        className='inputForm'
        onChange={handleSelectChange}
        id={name}
        name={name}
        value={value}
      >
        {arreglo.map((element, index) => (
          <option key={index} value={element}> {element} </option>
        ))}
      </select>
    </>
  )
}
