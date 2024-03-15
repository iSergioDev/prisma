import React, { useEffect } from 'react'

export const SellScreen = () => {
  useEffect(() => {
    document.title = 'Vender | Prisma'
  }, [])

  return (
    <div className='flex flex-col w-full items-center justify-center h-full'>
      <h1 className='text-6xl'>SellScreen</h1>
    </div>
  )
}
