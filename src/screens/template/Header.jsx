import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex text-white p-4">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold">Rb.</h1>
      </div>
      <div className="flex justify-center w-2/3 gap-x-16 text-lg">
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
    </header>
  );
};

export default Header;
