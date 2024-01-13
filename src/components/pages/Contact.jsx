import React from 'react';
import copy from "../assets/copy.png";
import github_Logo from "../assets/github_Logo.png";
import githubMark from "../assets/githubMark.png";
import linkedin_logo from "../assets/linkedin_logo.png";

const Contact = () => {

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
  )
}

export default Contact