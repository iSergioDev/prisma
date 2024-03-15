import React, { useEffect } from 'react'

export const ClientsScreen = () => {
  useEffect(() => {
    document.title = 'Clientes | Prisma'
  }, [])

  return (
    <div className='flex flex-col w-full items-center justify-center h-full'>
      <h1 className='text-6xl'>ClientsScreen</h1>
    </div>
  )
}
