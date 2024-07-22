import React from "react";

import Template from "./template/Template";
import Imagem from "../assets/codeImage.png";

const Home = () => {
  const page = "Home";
  return (
    <Template page={page}>
      <div id="home" className="text-white flex flex-col tablet:flex-row p-12">
        <div className="w-full tablet:w-1/2 flex flex-col items-center justify-center">
          {/* Desktop */}
          <h1 className="mobile:hidden text-2xl tablet:text-4xl">Bem-vindo! Eu sou <strong className="text-blue-500">Rafael Bayer</strong></h1>
          {/* Desktop */}

          {/* Mobile */}
          <h1 className="tablet:hidden text-2xl tablet:text-4xl">Bem-vindo!</h1>
          <h1 className="tablet:hidden text-2xl tablet:text-4xl mb-1">Eu sou <strong className="text-blue-500">Rafael Bayer</strong></h1>
          {/* Mobile */}

          <p className="text-xl tablet:text-3xl">Desenvolvedor Full-stack</p>
        </div>

        <div className="w-full tablet:w-1/2">
        <img src={Imagem} alt="a" />
        </div>
      </div>
    </Template>
  );
};

export default Home;
