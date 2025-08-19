import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

const MainBoard = ({toggleSidebar}) => {
  return (
    // main content area that takes full width
    <div className='flex-1 hide-scrollbar transition-all max-h-screen overflow-y-scroll'>
       {/* top navbar */}
        <Navbar toggleSidebar={toggleSidebar}/>
         {/* content rendered by nested routes */}
        <div className=' px-4'>
          <Outlet/>
        </div>
    </div>
  )
}

export default MainBoard