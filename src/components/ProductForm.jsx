import React from 'react'
import { CreateButtonClient } from './forms/CreateButtonClient'
import { useForm } from '../hooks/useForm'
import { CATEGORIES, INIT_PRODUCT } from '../helpers/consts'
import { TextInput } from './forms/TextInput'
import { NumberInput } from './forms/NumberInput'
import { SelectInput } from './forms/SelectInput'

export const ProductForm = () => {
  const [newProduct, handleInputChange, resetValues] = useForm(INIT_PRODUCT)

  const { nombre, precio, stock, categoria } = newProduct

  const handleSubmit = (e) => {
    console.log(newProduct)
    e.preventDefault()
    resetValues()
  }

  return (
    <div className='w-1/4 border h-auto my-auto mx-auto rounded'>
      <h2 className='titleForm'>Crear Nuevo Producto</h2>
      <form className='w-full max-w-lg flex justify-center' onSubmit={handleSubmit}>
        <div className='mb-6'>
          <TextInput
            text='nombre'
            placeHolder='nombre producto'
            name='nombre'
            value={nombre}
            handle={handleInputChange}
          />
          <NumberInput
            text='precio'
            name='precio'
            value={precio}
            handle={handleInputChange}
            min={0}
            step='0.1'
          />
          <NumberInput
            text='stock'
            name='stock'
            value={stock}
            handle={handleInputChange}
            min={1}
          />

          <SelectInput
            arreglo={CATEGORIES}
            handleChange={handleInputChange}
            text='categorias'
            name='categoria'
            value={categoria}
          />
          <CreateButtonClient
            texto='Crear'
            type='submit'
          />
          <CreateButtonClient texto='Cancelar' />
        </div>
      </form>
    </div>
  )
}
