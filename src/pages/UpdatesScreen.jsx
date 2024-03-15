import React, { useEffect } from 'react'

export const UpdatesScreen = () => {
  useEffect(() => {
    document.title = 'Actualizaciones | Prisma'
  }, [])

  return (
    <div className='flex flex-col w-full items-center justify-center h-full'>
      <h1 className='text-6xl'>UpdatesScreen</h1>
    </div>
  )
}
