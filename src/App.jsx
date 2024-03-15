// import { ClientForm } from './components/ClientForm.jsx'
// import { ProductForm } from './components/ProductForm.jsx'

import { useState } from 'react'

const App = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Dashboard', src: 'Chart_fill' },
    { title: 'Inventario', src: 'Chat' },
    { title: 'Vender', src: 'Chat', gap: true },
    { title: 'Ventas', src: 'User' },
    { title: 'Reportes', src: 'Calendar', gap: true },
    // { title: 'Search', src: 'Search' },
    // { title: 'Analytics', src: 'Chart' },
    // { title: 'Files ', src: 'Folder', gap: true },
    { title: 'Actualizaciones', src: 'Setting', gap: true }
  ]

  return (
    <div className={`${open ? 'w-72' : 'w-20'} p-5  pt-8 bg-dark-purple relative duration-300`}>
      <img
        src={require('./assets/control.png')}
        alt='nothing'
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple rounded-full ${!open && 'rotate-180'}`}
        onClick={() => {
          setOpen(!open)
        }}
      />

      <div className='flex gap-x-4 items-center'>
        <img
          src={require('./assets/logo.png')}
          alt='logo'
          className='cursor-pointer duration-500'
        />
        <h1 className={` text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>
          Prisma
        </h1>
      </div>
      <ul className='pt-6'>
        {Menus.map((menu, i) => (
          <li key={i} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? 'mt-9' : 'mt-2'}`}>
            <img src={require(`./assets/${menu.src}.png`)} alt={`${menu.title}`} />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
