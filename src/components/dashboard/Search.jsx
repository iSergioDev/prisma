import { FaSearch } from 'react-icons/fa'

export const Search = () => {
  return (
    <div className='flex flex-row text-2xl items-center w-96 -ml-2.5'>
      <input
        type='text'
        placeholder='Buscar...'
        className='pl-2 pb-1 pt-1 pr-10 w-full rounded-md focus:outline-none text-gray-500'
      />
      <FaSearch
        className='relative right-8 cursor-pointer text-indigo-700'
      />
    </div>
  )
}
