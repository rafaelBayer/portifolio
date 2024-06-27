import React from "react";

const Header = () => {
  return (
    <header class="bg-gray-900 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Rafael Bayer</h1>
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a href="#home" class="hover:text-blue-400">
                Home
              </a>
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
