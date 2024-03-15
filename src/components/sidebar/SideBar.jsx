import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { SideBarItem } from './SideBarItem'
import { MdDashboard, MdInventory } from 'react-icons/md'
import { TbReportMoney } from 'react-icons/tb'
import { FaCashRegister, FaChartBar } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi2'
import { GrUpdate } from 'react-icons/gr'
// import { SiPrisma } from 'react-icons/si'
import { LuChevronFirst, LuChevronLast } from 'react-icons/lu'
import { CiLogout } from 'react-icons/ci'
// import { Search } from '../dashboard/Search'

export const SideBar = ({ isAuthenticated, setLog }) => {
  const [open, setOpen] = useState(true)

  const Menus = [
    { title: 'Dashboard', path: '/dashboard', src: 'MdDashboard', gap: true, icon: <MdDashboard className='text-2xl' /> },
    { title: 'Inventario', path: '/inventario', src: 'Chart_fill', gap: true, icon: <MdInventory className='text-2xl' /> },
    { title: 'Vender', path: '/vender', src: 'Chart_fill', gap: true, icon: <FaCashRegister className='text-2xl' /> },
    { title: 'Ventas', path: '/ventas', src: 'Chart_fill', icon: <TbReportMoney className='text-2xl' /> },
    { title: 'Clientes', path: '/clientes', src: 'Chart_fill', gap: true, icon: <HiUsers className='text-2xl' /> },
    { title: 'Reportes', path: '/reportes', src: 'Chart_fill', gap: true, icon: <FaChartBar className='text-2xl' /> },
    { title: 'Actualizaciones', path: '/actualizaciones', src: 'Chart_fill', gap: true, icon: <GrUpdate className='text-2xl' /> }
  ]

  return (
    <div className='sticky z-10 h-screen'>

      <div className={`${open ? 'w-64' : 'w-16'} relative bg-indigo-500 text-white transition-all flex flex-col h-full`}>

        <div className='flex justify-between text-4xl bg-indigo-700 p-3'>
          <div className={`flex flex-row items-center gap-x-4 overflow-hidden transition-all origin-left ${!open && 'scale-0'}`}>
            <h1 className='font-serif'>PRISMA</h1>
          </div>
          <div
            className='cursor-pointer rounded-md border-2'
            onClick={() => {
              setOpen(!open)
            }}
          >
            {open ? <LuChevronFirst /> : <LuChevronLast />}
          </div>
        </div>

        <div className='flex flex-col bg-gradient-to-b from-indigo-500 to-indigo-900 h-full justify-between'>

          <ul className='pt-6 p-3'>
            {Menus.map((menu, index) => (
              <SideBarItem key={index} title={menu.title} path={menu.path} open={open} src={menu.src} gap={menu.gap} icon={menu.icon} />
            ))}
          </ul>

          <div className='flex flex-col w-full p-3 mb-1 gap-y-3'>
            <hr className='px-0' />
            <div className='flex flex-row items-center content-between justify-between'>
              <div className='flex flex-row h-12 gap-x-4 items-center'>
                <img
                  src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png'
                  alt='Avatar_URL'
                  className='w-10 border-1 rounded-full border-white'
                />
                <div className={`text-white transition-all origin-left ${!open && 'hidden'}`}>
                  <p>Nombre Usuario</p>
                  <span className='text-sm'>user@email.com</span>
                </div>
              </div>
              <CiLogout
                className={`text-4xl bg-red-500 cursor-pointer rounded-md border-2 hover:bg-red-700 transition-all origin-left ${!open && 'hidden'}`}
                onClick={() => {
                  setLog(!isAuthenticated)
                }}
              />

            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
