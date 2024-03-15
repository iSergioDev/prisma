import React, { useEffect } from 'react'

export const InventoryScreen = () => {
  useEffect(() => {
    document.title = 'Inventario | Prisma'
  }, [])

  return (
    <div className='flex flex-col w-full items-center justify-center h-full'>
      <h1 className='text-6xl'>InventoryScreen</h1>
    </div>
  )
}
