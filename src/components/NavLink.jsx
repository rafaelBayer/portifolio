import React from "react";
import { isEmpty } from "./Util";

const NavLink = ({ href, children, toggleMenu = null }) => {
  return (
    <div className="group mobile:block mobile:px-2 mobile:py-1">
      <a
        href={`#${href}`}
        class="text-foreground/70 group-hover:text-foreground inline-flex items-center gap-x-2"
        onClick={() => {
          !isEmpty(toggleMenu) && toggleMenu();
        }}
      >
        {children}
      </a>
      <div className="mobile:hidden w-0 bottom-0 left-0 h-1 bg-accent transition-all duration-300 rounded-lg group-hover:w-full"></div>
    </div>
  );
};

export default NavLink;
