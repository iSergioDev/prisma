import React, { useEffect } from 'react'
// import { Search } from '../components/dashboard/Search'
// import PaginationButtons from './components/paginate/PaginationButtons'

export const DashboardScreen = () => {
  useEffect(() => {
    document.title = 'Dashboard | Prisma'
  }, [])

  return (
    <div className='flex flex-col w-full items-center justify-center h-full'>
      <h1 className='text-6xl'>DashboardScreen</h1>
      {/* <PaginationButtons /> */}
    </div>
  )
}
