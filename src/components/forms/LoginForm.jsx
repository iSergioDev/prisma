import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import Swal from 'sweetalert2'

export const LoginForm = ({ isAuthenticated, setLog }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [valuesForm, handleInputChange] = useForm({
    user: '',
    password: ''
  })

  const { user, password } = valuesForm

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    if (user === '' && password === '') {
      Swal.fire({
        title: 'Error',
        text: 'Los campos usuario y contraseña se encuentran vacíos',
        icon: 'error'
      })
    } else if (user === '') {
      Swal.fire({
        title: 'Error',
        text: 'El campo usuario se encuentra vacío',
        icon: 'error'
      })
    } else if (password === '') {
      Swal.fire({
        title: 'Error',
        text: 'El campo contraseña se encuentra vacío',
        icon: 'error'
      })
    }
  }

  return (
    <div className='w-72 bg-white p-5 flex flex-col items-center justify-center sm:rounded-l-sm'>
      <h3 className='titleForm'>Iniciar sesión</h3>
      <form onSubmit={handleLogin}>
        <input
          autoComplete='off'
          className='inputForm'
          name='user'
          onChange={handleInputChange}
          placeholder='Usuario'
          type='text'
          value={user}
        />
        <input
          autoComplete='off'
          className='inputForm'
          name='password'
          onChange={handleInputChange}
          placeholder='Contraseña'
          type={isPasswordVisible ? 'text' : 'password'}
          value={password}
        />
        <label className='flex mb-5'>
          <input
            type='checkbox'
            className='mr-2 focus:bg-indigo-700'
            checked={isPasswordVisible}
            onChange={togglePasswordVisibility}
          />
          <span className='text-xs text-gray-600'>{!isPasswordVisible ? 'Mostrar contraseña' : 'Ocultar contraseña'}</span>
        </label>

        <button
          className={`buttonForm ${isLoggedIn ? 'disabled cursor-not-allowed opacity-50' : 'hover:bg-indigo-700'}`}
          onClick={() => {
            setIsLoggedIn(!isLoggedIn)
            setLog(!isAuthenticated)
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
