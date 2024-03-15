import React, { useEffect } from 'react'
import { LoginForm } from '../components/forms/LoginForm'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import ParticleBg from '../components/ParticleBg'

export const LoginScreen = ({ isAuthenticaded, setLog }) => {
  const year = new Date().getFullYear()

  useEffect(() => {
    document.title = 'Iniciar sesión en Prisma | Prisma'
  }, [])

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-indigo-500 to-indigo-900'>
        <div className='relative mb-12 text-center z-10'>
          <h1 className='text-white text-6xl mb-1 uppercase font-serif font-bold'>Prisma</h1>
          <h2 className='text-white text-xl uppercase font-serif font-semibold'>INVENTARIO - VENTAS - REPORTES</h2>
        </div>
        {/* THIS WORK */}
        <div className='flex flex-row shadow-xl z-10'>
          <LoginForm isAuthenticaded={isAuthenticaded} setLog={setLog} />
          <div className='hidden sm:block'>
            <img src={require('../assets/prisma.jpg')} alt='prisma logo' className='h-80 sm:rounded-r-sm' />
          </div>
        </div>
        <footer className='absolute bottom-0 w-full text-white text-center py-4'>
          <div className='flex flex-row items-center justify-center mb-2 relative z-10'>
            <p className='text-base'>Desarrollado por <strong>Sergio Carrillo</strong></p>
            <div className='flex justify-center'>
              <a href='https://www.github.com/iSergioDev' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='mx-2 text-white text-lg cursor-pointer' />
              </a>
              <a href='https://www.linkedin.com/in/sergioamaroc' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='mx-2 text-white text-lg cursor-pointer' />
              </a>
              <a href='https://www.instagram.com/sergioamaro_/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='mx-2 text-white text-lg cursor-pointer' />
              </a>
            </div>
          </div>
          <span className='text-sm'>&copy; 2023 - {year} <strong>Prisma&trade;</strong></span>
        </footer>
      </div>
      <ParticleBg className='z-0' />
    </>
  )
}
