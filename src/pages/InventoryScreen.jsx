import React, { useEffect, useState } from 'react'
import { PaginationButtons } from '../components/paginate/PaginationButtons'
import { SidebarCreate } from '../components/inventory/SidebarCreate'
import { fetchProducts } from '../helpers/fetchProducts'
import { GridProducts } from '../components/inventory/GridProducts'

export const InventoryScreen = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 6

  useEffect(() => {
    fetchProducts(setProducts, currentPage)
  }, [currentPage])

  useEffect(() => {
    document.title = 'Inventario | Prisma'
  }, [])

  // console.log(products)

  return (
    <div className='flex flex-row w-full items-center h-full gap-y-5 box-content'>
      {/* BOTONOS CREAR */}
      <SidebarCreate />

      {/* PRODUCTOS Y PAGINACION */}
      {/* CONTENEDOR */}
      <div className='flex flex-col w-full h-full justify-between box-content'>
        <GridProducts products={products} perPage={perPage} currentPage={currentPage} />
        <PaginationButtons currentPage={currentPage} setCurrentPage={setCurrentPage} totalProducts={products.length} />
      </div>
    </div>
  )
}
