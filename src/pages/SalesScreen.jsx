import React, { useEffect } from 'react'

export const SalesScreen = () => {
  useEffect(() => {
    document.title = 'Ventas | Prisma'
  }, [])

  return (
    <div className='flex flex-col w-full items-center justify-center h-full'>
      <h1 className='text-6xl'>SalesScreen</h1>
    </div>
  )
}
