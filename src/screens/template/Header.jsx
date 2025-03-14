import React, { useState } from "react";
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import NavLink from "../../components/NavLink";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <header className="flex z-50 text-white p-4 glass backdrop-blur">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold inline-flex gap-x-2">
          {" "}
          <FaReact color="#61DAFB" />
          Rb.
        </h1>
      </div>
      {/* DESKTOP */}
      <div className="mobile:hidden flex justify-end w-2/3 tablet:gap-x-4 text-lg">
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
          Experiência
        </NavLink>

        <NavLink href={"contato"}>
          <AiOutlineUser />
          Contato
        </NavLink>
      </div>
      {/* DESKTOP */}

      {/* MOBILE */}
      <div className="tablet:hidden w-full flex justify-end">
        <button onClick={() => toggleMenu()} className="text-white focus:outline-none">
          {showMenu ? <IoClose size="2rem" /> : <HiMenuAlt3 size="2rem" />}
        </button>

        <div className={`w-auto flex items-center ${showMenu ? "block" : "hidden"}`}>
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
              Experiência
            </NavLink>

            <NavLink href={"contato"} toggleMenu={toggleMenu}>
          <AiOutlineUser />
          Contato
        </NavLink>
          </div>
        </div>
      </div>
      {/* MOBILE */}
    </header>
  );
};

export default Header;
