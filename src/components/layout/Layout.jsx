import React from 'react'
import Navbar from './Navbar/Navbar'
import Aside from './Aside'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <div className="flex w-full h-[100%]">
            <Aside/>
            <div className="flex w-full top-0 relative">
                <div className=" md:w-[75%] mx-auto ">        
                    <Outlet/>      
                </div>
            </div>            
        </div>
    </>
  )
}

export default Layout