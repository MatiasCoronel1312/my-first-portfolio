import React, { useState } from "react";
import {movePage} from "../hooks/ScrollPage";
import {Link} from "react-router-dom"

const Aside = () => { 
  const [click, setClick] = useState('about');
  const handleClick = (menu) => {
    if (menu==='about') {
      setClick(menu)
    }else if(menu==='work'){
      setClick(menu);
    }else if(menu==='contact'){
      setClick(menu);
    }
  }

  return (
    <div className="top-24 h-[100vh] w-36 sticky z-10">
      <div className="h-28 "></div>
      <div className="h-full m-auto text-3xl ">
        <ul className="flex justify-evenly  flex-col ">
          <li onClick={()=>{movePage(0), handleClick('about')}} className={`px-2 pb-5 text-[#0D1321] mx-3 font-semibold hover:scale-105 ${click==='about'&&'border-b-4'} border-emerald-800  transform transition-all duration-200 hover:cursor-pointer`}>
           <Link to='/'>About</Link> 
          </li>
          <li onClick={()=>{movePage(1), handleClick('work')}} className={`px-2 py-5 text-[#0D1321] mx-3 font-semibold hover:scale-105 ${click==='work'&&'border-b-4'} border-emerald-800  transform transition-all duration-200 hover:cursor-pointer`}>
            <Link to='/works'>Work</Link>
          </li>
          <li onClick={()=>{movePage(2), handleClick('contact')}} className={`px-2 py-5 text-[#0D1321] mx-3 font-semibold hover:scale-105 ${click==='contact'&&'border-b-4'} border-emerald-800  transform transition-all duration-200 hover:cursor-pointer`}>
            <Link to='contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
