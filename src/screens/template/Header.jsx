import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <header className="flex text-white p-4">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold inline-flex gap-x-2">
          {" "}
          <FaReact color="#61DAFB" />
          Rb.
        </h1>
      </div>
      {/* DESKTOP */}
      <div className="mobile:hidden flex justify-center w-2/3 tablet:gap-x-16 text-lg">
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
          <a href="#experiencia" class="group-hover:text-blue-500 inline-flex items-center gap-x-2">
            <AiOutlineFundProjectionScreen />
            Experiência
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
          {showMenu ? <IoClose size="2rem" /> : <HiMenuAlt3 size="2rem" />}
        </button>

        <div className={`w-auto flex items-center ${showMenu ? "block" : "hidden"}`}>
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
              <a href="#experiencia" class="inline-flex items-center">
                <AiOutlineFundProjectionScreen />
                Experiência
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
