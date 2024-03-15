import React, { } from 'react'

import { useForm } from '../hooks/useForm'
import { CreateButtonClient } from './forms/CreateButtonClient'
import { CODIGOS, INIT_CLIENT, INIT_TELF } from '../helpers/consts'
import { TextInput } from './forms/TextInput'
import { SelectInput } from './forms/SelectInput'

export const ClientForm = ({ dni }) => {
  const [newClient, handleInputChange, resetValues] = useForm(INIT_CLIENT)
  const [newTelf, handleTelf, resetTelf] = useForm(INIT_TELF)

  const { nombre, cedula } = newClient
  const { prefijo, codigo, telf } = newTelf

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedClient = { ...newClient, telefono: (prefijo + codigo + telf) }
    console.log(updatedClient)
    resetValues()
    resetTelf()
  }

  return (
    <div className='md:w-1/4 sm:2/3 border h-auto my-auto mx-auto rounded pt-6 pb-6'>
      <h2 className='titleForm'>Registrar</h2>
      <h3 className='text-2xl text-center uppercase font-semibold block mb-6'>Nuevo Cliente</h3>
      <form className='w-full max-w-lg flex justify-center' onSubmit={handleSubmit}>
        <div className='mb-6'>
          <div className='w-full mb-6'>
            <TextInput
              text='nombre'
              placeHolder='nombre'
              handle={handleInputChange}
              name='nombre'
              value={nombre}
            />
          </div>
          <div className='w-full flex flex-wrap'>
            <div className='w-2/7 mr-2'>
              <SelectInput
                arreglo={CODIGOS}
                handleChange={handleTelf}
                text='codigo'
                name='codigo'
                value={codigo}
                // textDefault='XXX'
              />
            </div>
            <div className='w-5/7'>
              <TextInput
                name='telf'
                handle={handleTelf}
                placeHolder='555-55-55'
                text='teléfono'
                value={telf}
              />
            </div>
            <div />
          </div>
          <div className='w-full md:mb-0'>
            <TextInput
              text='cédula'
              placeHolder='cedula'
              handle={handleInputChange}
              name='cedula'
              value={dni === '' ? cedula : dni}
            />
          </div>
          <CreateButtonClient
            texto='Registrar'
            type='submit'
          />
          <CreateButtonClient
            texto='Cancelar'
          />
        </div>
      </form>
    </div>
  )
}
