import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="flex text-white p-4">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold">Rb.</h1>
      </div>
      {/* DESKTOP */}
      <div className="mob:hidden flex justify-center w-2/3 tablet:gap-x-16 text-lg">
        <div className="group">
          <a href="#home" class="group-hover:text-blue-500 inline-flex items-center gap-x-2">
            <AiOutlineHome />
            Home
          </a>
          <div className="w-0 bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 rounded-lg group-hover:w-full"></div>
        </div>

        <div className="group">
          <a href="#sobre" class="group-hover:text-blue-500 inline-flex items-center gap-x-2">
            <AiOutlineUser />
            Sobre
          </a>
          <div className={`w-0 bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 rounded-lg group-hover:w-full`}></div>
        </div>

        <div className="group">
          <a href="#projetos" class="group-hover:text-blue-500 inline-flex items-center gap-x-2">
            <AiOutlineFundProjectionScreen />
            Projetos
          </a>
          <div className={`w-0 bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 rounded-lg group-hover:w-full`}></div>
        </div>

        <div className="inline-flex items-center gap-x-2">
          <a
            className="hover:text-blue-500"
            href="https://github.com/rafaelBayer"
            target="_blank"
            rel="noopener noreferrer"
            title="Clique para acessar o Github"
          >
            <AiFillGithub size="1.8rem" />
          </a>

          <a
            className=" hover:text-blue-500"
            href="https://www.linkedin.com/in/rafaelbayer0/"
            target="_blank"
            rel="noopener noreferrer"
            title="Clique para acessar o Linkedin"
          >
            <AiFillLinkedin size="1.8rem" />
          </a>
        </div>
      </div>
      {/* DESKTOP */}

      {/* MOBILE */}
      <div class="tablet:hidden w-full flex justify-end">
        <button onClick={() => toggleMenu()} className="text-white focus:outline-none">
          {isOpen ? (
            <>
              <VscChromeClose size="2rem"/>
            </>
          ) : (
            <>
          {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg> */}
          <HiMenuAlt3 size="2rem"/>
            
            </>
          )}
        </button>

        <div className={`w-auto flex items-center ${isOpen ? "block" : "hidden"}`}>
          {/* <ul className="text-white flex-row">
            <li><a href="#home" className="block px-2 py-1">Home</a></li>
            <li><a href="#about" className="block px-2 py-1">Sobre</a></li>
            <li><a href="#services" className="block px-2 py-1">Projetos</a></li>
            <li><a href="#contact" className="block px-2 py-1">Contact</a></li>
          </ul> */}
          <div className="flex-row">
            <div className="block px-2 py-1">
              <a href="#home" class="inline-flex items-center">
                <AiOutlineHome />
                Home
              </a>
            </div>

            <div className="block px-2 py-1">
              <a href="#sobre" class="inline-flex items-center">
                <AiOutlineUser />
                Sobre
              </a>
            </div>

            <div className="block px-2 py-1">
              <a href="#projetos" class="inline-flex items-center">
                <AiOutlineFundProjectionScreen />
                Projetos
              </a>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex space-x-3">
                <a
                  className="hover:text-blue-500"
                  href="https://github.com/rafaelBayer"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Clique para acessar o Github"
                >
                  <AiFillGithub size="1.5rem" />
                </a>

                <a
                  className=" hover:text-blue-500"
                  href="https://www.linkedin.com/in/rafaelbayer0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Clique para acessar o Linkedin"
                >
                  <AiFillLinkedin size="1.5rem" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
    </header>
  );
};

export default Header;
