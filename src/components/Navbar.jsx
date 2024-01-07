import React from 'react';

const Navbar = () => {
  return (
    <header className='top-0 h-36 w-full sticky z-10'>
        <div className='h-full m-auto text-3xl '>
            <ul className='flex justify-between items-center'>
              <li className='px-5 py-1 text-black mx-1  transform transition-all duration-300 hover:cursor-pointer'>En</li>
              <li className='px-5 py-1 text-black mx-1  transform transition-all duration-300 hover:cursor-pointer'>Dark</li>
              <li className='px-5 py-1 text-black mx-1  transform transition-all duration-300 hover:cursor-pointer'>CV</li>
            </ul>
        </div> 
    </header>
  )
}

export default Navbar;