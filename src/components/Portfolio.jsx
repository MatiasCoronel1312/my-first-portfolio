import React, { useEffect, useRef, useState } from "react";
import MatiasCoronel from "../assets/MatiasCoronel.jpeg";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const deltaYRef = useRef(false);
  const currentPageRef = useRef(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const currentScrollY = event.deltaY;
      console.log(currentScrollY);
      if (currentScrollY > 0 && !deltaYRef.current) {
        scrollPage("down");
        deltaYRef.current = true;
        setTimeout(() => {
          deltaYRef.current = false;
        }, 700);
      }
      if (currentScrollY < 0 && !deltaYRef.current) {
        scrollPage("up");
        deltaYRef.current = true;
        setTimeout(() => {
          deltaYRef.current = false;
        }, 700);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const scrollPage = (value) => {
    const movePage = (page) => {
      const element = document.getElementById(page);
      if (element) {
        const offset = element.offsetTop;
        window.scroll({
          top: offset,
          behavior: "smooth",
        });
      }
    };

    if (value == "down" && currentPageRef.current === 0) {
      currentPageRef.current = 1;
      return movePage(1);
    }
    if (value == "down" && currentPageRef.current === 1) {
      currentPageRef.current = 2;
      return movePage(2);
    }
    if (value == "up" && currentPageRef.current === 2) {
      currentPageRef.current = 1;
      return movePage(1);
    }
    if (value == "up" && currentPageRef.current === 1) {
      currentPageRef.current = 0;
      return movePage(0);
    }
  };

  return (
    <div className="flex w-full">
      <div className="mt-64">
        <div id={0} className={`page `}>
          <div className="flex mt-44 mx-16">
            <img
              className="lg:m-5 w-[40%] lg:mx-20 lg:w-[22rem] lg:h-[27rem] rounded-[0.625rem] border-[5px] border-solid border-[#016262] bg-lightgray bg-no-repeat bg-cover bg-center"
              src={MatiasCoronel}
              alt="foto"
            />
            <div>
              <h1 className="text-[#016262] p-5 text-[2.5rem] font-normal w-[28rem] h-[6.9375rem] flex-shrink-0">
                Hi, Im' Matias Coronel Frontend Developer
              </h1>
              <p className="w-[30rem] h-[5.875rem] p-5 flex-shrink-0 text-[1.125rem] font-bold text-[#0D1321]">
                I am a dedicated web and mobile app developer, recently
                graduated.
              </p>
            </div>
          </div>
        </div>
        <div id={1} className={`page  flex-col `}>
          <div className="w-full flex">
            <img className="w-[10%] lg:w-10%] " src={css} alt="css" />
            <img className="w-[10%] lg:w-10%] " src={figma} alt="figma" />
            <img className="w-[10%] lg:w-10%] " src={git} alt="git" />
            <img
              className="w-[10%] lg:w-10%] "
              src={javascript}
              alt="javascript"
            />
            <img className="w-[10%] lg:w-10%] " src={react} alt="react" />
            <img
              className="w-[10%] lg:w-10%] "
              src={bootstrap}
              alt="bootstrap"
            />
          </div>

          <h1 className="text-red-500 text-3xl">Work</h1>
        </div>

        <div id={2} className={`page `}>
          <h1 className="text-red-500 text-3xl">Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
