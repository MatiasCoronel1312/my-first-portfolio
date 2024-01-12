import React, { useEffect, useRef, useState } from "react";
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
import copy from "../assets/copy.png";

import github_Logo from "../assets/github_Logo.png";
import githubMark from "../assets/githubMark.png";
import linkedin_logo from "../assets/linkedin_logo.png";

import { handleScroll } from "./hooks/ScrollPage";

const Portfolio = () => {
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const handleCopyClick = () => {
    const emailToCopy = "5446matias@gmail.com";
    navigator.clipboard
      .writeText(emailToCopy)
      .then(() => {
        //alert(`¡Correo copiado al portapapeles: ${emailToCopy}`);
      })
      .catch((error) => {
        console.error("Error al copiar al portapapeles:", error);
      });
  };

  return (
    <div className="flex w-full top-0 relative">
      <div className=" md:w-[75%] mx-auto ">
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
        <div id={1} className={`h-[100vh] w-full`}>
          <div className="h-28 flex items-center">
            <h1 className="text-[#016262] text-3xl">Work</h1>
          </div>
          <div className="flex justify-around">
             <div className="rounded-lg border-2 border-black w-[60%] h-[12rem] m-5"></div>
          <div className="rounded-lg border-2 border-black w-[60%] h-[12rem] m-5"></div>
          <div className="rounded-lg border-2 border-black w-[60%] h-[12rem] m-5"></div>
          <div className="rounded-lg border-2 border-black w-[60%] h-[12rem] m-5"></div>
        </div>
          </div>
         

        <div id={2} className={`h-[100vh] w-full flex`}>
          <div className="flex flex-col  w-1/2 h-full">
            <div className=" h-28 flex items-center">
              <h1 className=" text-[#016262] font-semibold  text-3xl">
                Contact me
              </h1>
            </div>

            <div className="w-1/2 flex flex-col">
              <a
                href="https://github.com/MatiasCoronel1312"
                target="_blank"
                className="flex border-4 border-black rounded-2xl px-3 py-1 justify-center w-[17rem] mb-12 hover:bg-[#016262]"
              >
                <img className="w-[25%]" src={githubMark} alt="github-logo" />
                <img className="w-1/2" src={github_Logo} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/matias-coronel-77a8b822b/"
                target="_blank"
                className="border-4 border-black rounded-2xl w-[17rem] h-[5rem] flex items-center hover:bg-[#016262]"
              >
                <img
                  className="w-[100%] p-1"
                  src={linkedin_logo}
                  alt="linkedin"
                />
              </a>
            </div>
          </div>

          <div className=" h-full w-1/2">
            <div className=" w-[80%] h-28 flex flex-col  justify-end pl-2">
              <h2 className=" h-8 font-semibold text-xl text-[#016262] ">
                Write me:
              </h2>
              <div className="flex justify-between py-1">
                <p className="font-semibold">5446matias@gmail.com</p>
                <button
                  onClick={handleCopyClick}
                  className="w-6 bg-white rounded-md active:bg-[#016262]"
                >
                  <img src={copy} alt="copy" />
                </button>
              </div>
            </div>

            <div>
              <form
                className="w-[80%] rounded-lg flex flex-col justify-center "
                action="https://formsubmit.co/elmati.08@hotmail.com"
                method="POST"
              >
                <div className="w-full rounded-lg border-4  border-black mb-1">
                  <input
                    className="rounded-lg p-1 w-full bg-[#BBDEF0] placeholder:bg-[#BBDEF0]"
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="w-full rounded-lg border-4 border-black mb-1 ">
                  <input
                    className="rounded-lg p-1 w-full bg-[#BBDEF0]"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="w-full rounded-lg border-4 border-black p-1 h-[7rem] bg-[#BBDEF0]"
                    name="consulta"
                    placeholder="Ingrese texto"
                    rows="8"
                  ></textarea>
                </div>
                <div>
                  <input
                    className="border-4 border-black rounded-xl px-3 font-semibold hover:bg-[#016262] cursor-pointer mx-1"
                    type="submit"
                    value="Enviar"
                  />
                  <input
                    className="border-4 border-black rounded-xl px-3 font-semibold hover:bg-[#016262] cursor-pointer mx-1"
                    type="reset"
                    value="Reset"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
