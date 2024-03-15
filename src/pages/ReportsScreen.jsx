import React, { useEffect } from 'react'

export const ReportsScreen = () => {
  useEffect(() => {
    document.title = 'Reportes | Prisma'
  }, [])

  return (
    <div className='flex flex-col w-full items-center justify-center h-full'>
      <h1 className='text-6xl'>ReportsScreen</h1>
    </div>
  )
}
