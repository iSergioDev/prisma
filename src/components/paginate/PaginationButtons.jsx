import React from 'react'
import ReactPaginate from 'react-paginate'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export const PaginationButtons = ({ currentPage, setCurrentPage, totalProducts }) => {
  const productsPerPage = 6
  const pageCount = Math.ceil(totalProducts / productsPerPage)

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1)
  }

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <ReactPaginate
        breakLabel={<span className='mr-4'>...</span>}
        nextLabel={
          <span className='w-10 h-10 flex items-center justify-center bg-indigo-300 rounded-md'>
            <BsChevronRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <span className='w-10 h-10 flex items-center justify-center bg-indigo-300 rounded-md mr-4'>
            <BsChevronLeft />
          </span>
        }
        containerClassName='flex items-center justify-center mt-8 mb-4'
        pageClassName='block hover:bg-indigo-300 w-10 h-10 flex items-center justify-center rounded-md mr-4'
        activeClassName='bg-indigo-700 text-white'
      />
    </div>
  )
}
