import React from "react";
import idioma from "../assets/idioma.png";

const Navbar = () => {
  return (
    <header className="top-0 h-24 w-full sticky z-20 navbar  border-b-4 border-[#016262]">
      <div className="h-full m-auto text-xl ">
        <ul className="flex h-full justify-between items-center">
          <li className="px-1 py-1 text-[#0D1321] mx-1 flex  transform transition-all duration-300 hover:cursor-pointer">
            <img className="w-5 h-5 my-auto" src={idioma} alt="foto" />
            En
          </li>
          <li className="px-5 py-1 text-[#0D1321] mx-1  transform transition-all duration-300 hover:cursor-pointer">
            Dark
          </li>
          <li className="px-5 py-1 text-[#0D1321] mx-1  transform transition-all duration-300 hover:cursor-pointer">
            CV
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
