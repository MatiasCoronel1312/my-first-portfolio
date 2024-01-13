import React, { useEffect, useRef, useState } from "react";
import { handleScroll } from "../hooks/ScrollPage";

const MainContain = () => {
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
 

  return (
    <div className="flex w-full top-0 relative">
      <div className=" md:w-[75%] mx-auto ">     
      </div>
    </div>
  );
};

export default MainContain;
