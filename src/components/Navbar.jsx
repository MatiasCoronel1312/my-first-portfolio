import React from 'react';

const Navbar = () => {
  return (
    <header className='navbar top-0 w-full h-24 sticky z-10'>
        <div className='lg:w-[80%] h-full m-auto text-3xl '>
            <ul className='flex justify-end h-full items-center'>
              <li className='px-5 py-1 text-black mx-5 font-semibold hover:font-bold border-4 border-transparent hover:border-black rounded-full transform transition-all duration-500 hover:cursor-pointer hover:text-black '>Info</li>
              <li className='px-5 py-1 text-black mx-5 font-semibold hover:font-bold border-4 border-transparent hover:border-black rounded-full transform transition-all duration-500 hover:cursor-pointer hover:text-black '>Proyect</li>
              <li className='px-5 py-1 text-black mx-5 font-semibold hover:font-bold border-4 border-transparent hover:border-black rounded-full transform transition-all duration-500 hover:cursor-pointer hover:text-black '>Contact</li>
            </ul>
        </div> 
    </header>
  )
}

export default Navbar;