import { FaCirclePlus } from 'react-icons/fa6'

export const SidebarCreate = () => {
  return (
    <div className='flex flex-col gap-4 w-1/7 p-4 h-full bg-white rounded-r-full'>
      <div className='flex flex-row items-center text-3xl gap-x-2 text-blue-700 mt-20'>
        <FaCirclePlus />
        <h2 className=''>
          Crear
        </h2>
      </div>
      <div className='text-white flex flex-col gap-y-4 text-sm'>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Categoria
        </button>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          SubCategoria
        </button>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Producto
        </button>
      </div>

    </div>
  )
}
