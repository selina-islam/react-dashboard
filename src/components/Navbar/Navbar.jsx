import React from 'react'
import user from '../../assets/user.png'
import { FiMenu } from 'react-icons/fi'
import { CiSearch } from 'react-icons/ci'
import { IoMdNotificationsOutline } from 'react-icons/io'

const Navbar = ({toggleSidebar}) => {
  return (
   <nav className='bg-primary w-full shadow-md py-4'>
      <div className='flex justify-between items-center gap-2 px-2'>
          <button onClick={toggleSidebar} className='md:hidden cursor-pointer'>
            <FiMenu/>
          </button>
          <div className='flex bg-primary2 items-center text-garyText justify-center gap-2 p-1.5 md:p-2.5 min-w-[200px] max-w-xl rounded-md w-[100%]'>
            <CiSearch className='text-xl'/>
            <input type="text" placeholder='Search For Something' className='bg-transparent text-gray-300 border-none w-full outline-none' />
          </div>
          <div className='flex items-center justify-center gap-x-2'>
            <div className='relative'>
              <div className='absolute bg-red-500 rounded-full w-2 h-2 top-[3px] right-[5px]'>
              </div>
              <IoMdNotificationsOutline className='text-gray-400 text-[25px] md:text-[30px]'/>         
            </div>
             <img src={user} alt="user_image" className='cursor-pointer w-8 h-8 rounded-full' />
          </div>
      </div>
   </nav>
  )
}

export default Navbar