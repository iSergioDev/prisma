import React from 'react'
import { Link } from 'react-router-dom'

export const SideBarItem = ({ title, path, icon, open, gap }) => {
  return (
    <div className='flex flex-row relative group transition-all'>
      <li className={`items-center cursor-pointer text-white p-2 hover:bg-gray-200 hover:bg-opacity-50 rounded-md duration-300 ${gap ? 'mt-5' : 'mt-2'} w-full`}>
        <Link to={path} className='flex flex-row gap-x-2 items-center'>
          {/* <img src={require(`../../assets/${src}.png`)} alt={`${title}`} /> */}
          {icon}
          <span className={`${!open && 'hidden'} origin-left duration-200`}>{title}</span>
        </Link>
      </li>
      {!open && (
        <div
          className={`absolute left-full rounded-md p-2 ml-6 ${gap ? 'mt-5' : 'mt-2'} bg-indigo-100 text-indigo-700 invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {title}
        </div>
      )}
    </div>
  )
}
