import React from "react";

const Aside = () => {
  return (
    <div className="top-44 h-full w-36 sticky z-10">
      <div className="h-full m-auto text-3xl ">
        <ul className="flex justify-end  flex-col ">
          <li className="px-2 py-5 text-[#0D1321] mx-3 font-semibold hover:scale-110 border-b-4 border-emerald-800  transform transition-all duration-300 hover:cursor-pointer">
            About
          </li>
          <li className="px-2 py-5 text-[#0D1321] mx-3 font-semibold hover:scale-110 border-b-4 border-emerald-800  transform transition-all duration-300 hover:cursor-pointer">
            Work
          </li>
          <li className="px-2 py-5 text-[#0D1321] mx-3 font-semibold hover:scale-110 border-b-4 border-emerald-800  transform transition-all duration-300 hover:cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
