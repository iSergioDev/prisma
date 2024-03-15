import React from 'react'

export const CreateButtonClient = ({ texto, type, handle }) => {
  return (
    <button
      className='buttonForm'
      type={type}
      onClick={handle}
    >
      {texto}
    </button>
  )
}
