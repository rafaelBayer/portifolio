import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
  const [hover, setHover] = useState(false);

  console.log(hover);
  return (
    <header class="text-white p-4">
      <div class=" flex justify-between items-center">
        <h1 class="text-2xl font-bold">Rafael Bayer</h1>
        <nav>
          <ul class="flex space-x-6">
            <li className="w-full" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <a href="#home" class="hover:text-blue-400">
                <div className="row">
                <div className="col-auto">
                <AiOutlineHome/>
                </div>
                <div className="col-auto">

                Home
                </div>

                </div>
              </a>
              <div
                className={`bottom-0 left-0 h-1 bg-blue-400 transition-all duration-300 ${hover ? "w-full" : "w-0"}`}
              ></div>
            </li>
            <li>
              <a href="#about" class="hover:text-blue-400">
                Sobre
              </a>
            </li>
            <li>
              <a href="#projects" class="hover:text-blue-400">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" class="hover:text-blue-400">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
