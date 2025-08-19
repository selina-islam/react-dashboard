import { useState } from 'react'
import './App.css'
// importing all components
import Dashboard from './components/Dashboard/Index';
import Profile from './components/Profile/Profile';
import Order from './components/Order/Order';
import Products from './components/Product/Products';
import Sales from './components/SalesReport/Sales';
import Error from './components/NotFound/Error'
import Sidebar from './components/Sidebar/Sidebar';
import MainBoard from './components/Dashboard/MainBoard';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [isOpen, setIsOpen]= useState(true)
    // toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
   <div className='bg-primary w-full text-secondary'>
    {/* main container */}
    <div className='container'>
      <div className=' bg-primary flex min-h-screen '>
      {/* sidebar (hidden on small screen, shown on medium and above) */}
      <div className={`absolute md:relative z-50 top-0 transition-all duration-200 ${isOpen ? 'left-0':'left-[-100%]'}`}>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      </div>

         {/* main content area */}
     <div className='w-full'>
       <Routes>
        <Route path='/' element={<MainBoard toggleSidebar={toggleSidebar}/>} >
            <Route path='/' index element={<Dashboard/>}/>
            <Route path='profile' index element={<Profile/>}/>
            <Route path='order' index element={<Order/>}/>
            <Route path='product' index element={<Products/>}/>
            <Route path='sales' index element={<Sales/>}/>
            <Route path='*' index element={<Error/>}/>
        </Route>
      </Routes>
     </div>
    </div>
    </div>
   </div>
  )
}

export default App
