import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa'
import { MdCategory } from 'react-icons/md'
import { FaBarcode } from 'react-icons/fa6'

export const GridProducts = ({ products, currentPage, perPage }) => {
  return (
    <div className='grid grid-cols-2 gap-6 w-full p-5'>
      {products.map((product, index) => {
        // Calcular el índice del primer elemento en la página actual
        const startIndex = (currentPage - 1) * perPage
        // Calcular el índice del último elemento en la página actual
        const endIndex = startIndex + perPage - 1

        // Verificar si el índice del elemento actual está dentro del rango de la página actual
        if (index >= startIndex && index <= endIndex) {
          return (
            <div key={product.id} className='box-content rounded-md h-32 w-full shadow-lg bg-white border-r-2 border-b-2 border-slate-300'>
              <div className='flex flex-row h-full gap-x-1 w-full transition-all $ rounded-md'>

                <img src={product.url_categoria_default} alt={product.nombre_producto} className='rounded-tl-md h-32 w-32 rounded-l-md' />

                <div className='flex flex-col justify-between h-full w-full p-1'>
                  <div className='flex flex-row justify-between w-full h-full gap-x-4'>

                    <div className='flex flex-col justify-between w-5/6'>
                      <p className='text-sm font-semibold'>{product.nombre_producto}</p>
                      <div className='w-full flex flex-row gap-x-1 text-white'>
                        <span className='flex flex-row items-center rounded gap-x-1 w-fit text-xs font-semibold py-1 px-2 bg-indigo-500'><MdCategory />{product.nombre_categoria}</span>
                        {product.nombre_subcategoria !== null && <span className='flex flex-row items-center rounded gap-x-1 w-fit text-xs font-semibold py-1 px-2 bg-indigo-900'>{product.nombre_subcategoria}</span>}

                      </div>
                    </div>

                    <div className='flex flex-col w-2/6 h-full font-bold items-center justify-between text-white'>
                      <span className='flex w-full text-2xl py-1 items-center justify-center bg-green-400 rounded-md'>
                        $ {product.precio}
                      </span>
                      <span className={`flex flex-row items-center text-sm justify-between rounded-md gap-x-1 w-full font-semibold py-2 px-2 text-white ${product.stock === 0 && 'bg-red-600'} ${product.stock === 1 && 'bg-orange-600'} ${product.stock > 1 && 'bg-green-700'}`}>
                        <span className='flex flex-row items-center gap-x-1'>
                          {product.stock === 0 && <FaTimesCircle />}
                          {product.stock === 1 && <FaExclamationCircle />}
                          {product.stock > 1 && <FaCheckCircle />}
                          STOCK:
                        </span>
                        {product.stock}
                      </span>
                      <div className='flex flex-row w-full text-sm justify-between px-2 py-2 bg-blue-600 rounded-md'>
                        <div className='flex flex-row gap-x-1 items-center'>
                          <FaBarcode />
                          <span className=''>ID: </span>
                        </div>
                        <span>{product.id}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        } else {
          return null // No mostrar el elemento si no pertenece a la página actual
        }
      })}
    </div>
  )
}
