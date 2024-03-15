import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardScreen } from './DashboardScreen'
import { InventoryScreen } from './InventoryScreen'
import { ReportsScreen } from './ReportsScreen'
import { SellScreen } from './SellScreen'
import { SalesScreen } from './SalesScreen'
import { UpdatesScreen } from './UpdatesScreen'
import { SideBar } from '../components/sidebar/SideBar'
import { ClientsScreen } from './ClientsScreen'
import { Search } from '../components/dashboard/Search'

// Componente principal que contiene el Sidebar y el contenido principal
export const App = ({ isAuthenticated, setLog }) => {
  return (
    <div className='flex flex-row h-screen w-screen bg-gray-100'>
      <SideBar isAuthenticated={isAuthenticated} setLog={setLog} />
      <div className='relative flex flex-col w-full'>

        <div className='text-4xl text-white bg-indigo-700 p-3 w-full'>
          <Search />
        </div>
        <div className='relative  h-full w-full'>
          {/* Contenido principal */}
          <Routes>
            <Route path='dashboard' element={<DashboardScreen />} />
            <Route path='inventario' element={<InventoryScreen />} />
            <Route path='vender' element={<SellScreen />} />
            <Route path='ventas' element={<SalesScreen />} />
            <Route path='reportes' element={<ReportsScreen />} />
            <Route path='actualizaciones' element={<UpdatesScreen />} />
            <Route path='clientes' element={<ClientsScreen />} />
            {/* Ruta por defecto */}
            <Route path='/' element={<DashboardScreen />} />
            <Route
              path='*'
              element={<Navigate to='dashboard' replace />}
            />
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default App
