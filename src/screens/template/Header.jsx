import React, { useState } from "react";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import NavLink from "../../components/NavLink";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full text-white p-4 glass backdrop-blur">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold inline-flex gap-x-2">
          <FaReact color="#61DAFB" />
          Rb.
        </h1>
      </div>

      <nav className="mobile:hidden flex justify-end w-2/3 tablet:gap-x-4 text-lg">
        <NavLink href={"home"}>
          <AiOutlineHome />
          Home
        </NavLink>

        <NavLink href={"sobre"}>
          <AiOutlineUser />
          Sobre
        </NavLink>

        <NavLink href={"experiencia"}>
          <AiOutlineFundProjectionScreen />
          Experi&ecirc;ncia
        </NavLink>

        <NavLink href={"projects"}>
          <FiFolder />
          Projetos
        </NavLink>

        <NavLink href={"contato"}>
          <AiOutlineUser />
          Contato
        </NavLink>
      </nav>

      <div className="tablet:hidden w-full flex justify-end">
        <button
          type="button"
          onClick={() => toggleMenu()}
          className="text-white focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label={showMenu ? "Fechar menu" : "Abrir menu"}
        >
          {showMenu ? <IoClose size="2rem" /> : <HiMenuAlt3 size="2rem" />}
        </button>

        <nav
          className={`w-auto flex items-center ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <div className="flex-row">
            <NavLink href={"home"} toggleMenu={toggleMenu}>
              <AiOutlineHome />
              Home
            </NavLink>

            <NavLink href={"sobre"} toggleMenu={toggleMenu}>
              <AiOutlineUser />
              Sobre
            </NavLink>

            <NavLink href={"experiencia"} toggleMenu={toggleMenu}>
              <AiOutlineFundProjectionScreen />
              Experi&ecirc;ncia
            </NavLink>

            <NavLink href={"projects"} toggleMenu={toggleMenu}>
              <FiFolder />
              Projetos
            </NavLink>

            <NavLink href={"contato"} toggleMenu={toggleMenu}>
              <AiOutlineUser />
              Contato
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
