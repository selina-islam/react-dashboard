import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaChartLine, FaUser } from 'react-icons/fa'
import { IoBag } from 'react-icons/io5'
import { MdClose, MdDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'

// sidebar navigation items
const sideBarItems =[
  {name: 'Dashboard',
    icon: <MdDashboard/>,
    link: '/'
  },
  {name: 'Profile',
    icon: <FaUser/>,
    link: '/profile'
  },
  {name: 'Order',
    icon: <AiOutlineShoppingCart/>,
    link: '/order'
  },
  {name: 'Product',
    icon: <IoBag/>,
    link: '/product'
  },
  {name: 'Sales Report',
    icon: <FaChartLine/>,
    link: '/sales'
  },
]


const Sidebar = ({toggleSidebar}) => {
  const [isActive, setIsActive] = useState(0)
  return (
       // sidebar container
    <div className='bg-primary border-r border-primary2 text-white h-screen p-5 w-44 md:w-60 transition-all'>
       {/* navigation list */}
        <ul className='space-y-3 text-white mt-5 md:mt-0'>
            {sideBarItems.map((item, index)=>
            (
          
                <Link to={item.link} onClick={()=>setIsActive(index)} key={item.name} className={`flex font-medium px-2 py-2.5 rounded-lg items-center gap-2 cursor-pointer hover:bg-secondary hover:text-primary transition-all duration-200 ${ index ===isActive ? 'text-primary2 bg-secondary':'text-garyText'}`}>
                    {item.icon} {item.name}
                </Link>
     
            ))}
        </ul>
         {/* close button for small screens */}
        <button onClick={toggleSidebar} className='md:hidden absolute top-0 right-0 cursor-pointer text-2xl px-2'>
              <MdClose/>
        </button>
    </div>
  )
}

export default Sidebar