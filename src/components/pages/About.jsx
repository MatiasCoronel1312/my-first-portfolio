import React from 'react';
import MatiasCoronel from "../assets/MatiasCoronel.jpeg";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import jira from "../assets/jira.png";
import sass from "../assets/sass.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";

const About = () => {
  return (
    <div id={0} className={`h-[100vh] w-full flex flex-col`}>
          <div className="h-28"></div>
          <div className="flex">
            <div className="lg:m-  w-[13rem] h-[14rem] rounded-[0.625rem] border-[5px] border-solid border-[#016262] lg:mr-16 lg:w-[rem] lg:h-[rem] bg-black">
              <img
                className=" lg:w-full bg-lightgray bg-no-repeat object-cover bg-center h-full rounded-md "
                src={MatiasCoronel}
                alt="foto"
              />
            </div>

            <div>
              <h1 className="text-[#016262] px-5 text-[2.5rem] font-semibold w-[28rem] h-auto">
                Hi, Im' Matias Coronel Frontend Developer
              </h1>
              <p className="w-[30rem] h-[5.875rem] px-5 flex-shrink-0 text-[1.125rem] font-bold text-[#0D1321]">
                I am a dedicated web and mobile app developer, recently
                graduated.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between ">
            <img
              className="w-[3%] md:w-[4%] lg:w-[5%] "
              src={html}
              alt="html"
            />
            <img className="w-[3%] md:w-[4%] lg:w-[5%] " src={css} alt="css" />
            <img
              className="w-[3%] md:w-[4%] lg:w-[5%] "
              src={javascript}
              alt="javascript"
            />
            <img
              className="w-[3%] md:w-[4%] lg:w-[5%] "
              src={react}
              alt="react"
            />
            <img
              className="w-[3%] md:w-[4%] lg:w-[5%] "
              src={tailwind}
              alt="tailwind"
            />
            <img
              className="w-[3%] md:w-[4%] lg:w-[5%] "
              src={bootstrap}
              alt="bootstrap"
            />
            <img
              className="w-[3%] md:w-[4%] lg:w-[5%] "
              src={sass}
              alt="sass"
            />
            <img className="w-[3%] md:w-[4%] lg:w-[5%] " src={git} alt="git" />
            <img
              className="w-[3%] md:w-[4%] lg:w-[5%] "
              src={figma}
              alt="figma"
            />
            <img
              className="w-[3%] md:w-[4%] lg:w-[5%] "
              src={jira}
              alt="jira"
            />
          </div>
        </div>
  )
}

export default About;