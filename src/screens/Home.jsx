import React from "react";

import Template from "./template/Template";
import Imagem from "../assets/codeImage.png";
import { BsChatRightTextFill } from "react-icons/bs";

const Home = () => {
  const page = "Home";
  return (
    <Template page={page}>
      <div id="home" className="text-white flex flex-col tablet:flex-row p-12">
        <div className="w-full tablet:w-1/2 flex flex-col items-center justify-center">
          {/* Desktop */}
          <h1 className="mobile:hidden text-2xl tablet:text-4xl">
            Bem-vindo! Eu sou <strong className="text-blue-500">Rafael Bayer</strong>
          </h1>
          {/* Desktop */}

          {/* Mobile */}
          <h1 className="tablet:hidden text-2xl tablet:text-4xl">Bem-vindo!</h1>
          <h1 className="tablet:hidden text-2xl tablet:text-4xl mb-1">
            Eu sou <strong className="text-blue-500">Rafael Bayer</strong>
          </h1>
          {/* Mobile */}

          <p className="text-xl tablet:text-3xl">Desenvolvedor Full-stack</p>
        </div>

        <div className="w-full tablet:w-1/2">
          <img src={Imagem} alt="a" />
        </div>
      </div>

      <div id="sobre" className="text-white flex flex-col tablet:flex-row p-12">
        <div className="bg-gray-800 w-full flex flex-col items-center justify-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold tablet:text-4xl mb-4">Sobre mim</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nisi faucibus, blandit arcu sed, condimentum
            enim. Suspendisse sit amet sagittis sem. Morbi laoreet elementum nulla, non malesuada massa. Nunc dictum suscipit
            tincidunt. Vivamus rhoncus lorem et est dignissim eleifend. Fusce fermentum auctor enim eu vulputate. Integer
            facilisis ut purus et ullamcorper. Pellentesque accumsan vulputate sagittis. Suspendisse auctor, diam ac laoreet
            aliquam, lacus augue condimentum neque, ac porta nibh enim at odio. Sed vel libero massa. Nullam vitae porttitor
            purus. Duis nec varius leo.
          </p>
        </div>
      </div>

      <div id="experiencia" className="text-white flex flex-col p-12">
        <Experiencia
          cargo="Desenvolvedor full-stack | Pleno"
          inicio="Junho 2024"
          fim="Presente"
          descricao="Desenvolvimento de aplicações web utilizando React.js, Node.js e MongoDB. Responsável pela criação de interfaces de usuário e integração com APIs REST."
        />

        <Experiencia
          cargo="Desenvolvedor full-stack | Junior"
          inicio="Junho 2023"
          fim="Junho 2024"
          descricao="Desenvolvimento de aplicações web utilizando React.js, Node.js e MongoDB. Responsável pela criação de interfaces de usuário e integração com APIs REST."
        />

        <Experiencia
          cargo="Estagiario em programação"
          inicio="Dezembro 2022"
          fim="Junho 2023"
          descricao="Auxiliando no desenvolvimento web, resolvendo problema e implementando novas funcionalidades."
        />
      </div>
    </Template>
  );
};

const Experiencia = ({ cargo, inicio, fim, descricao, tecnologias }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-4">
      <div className="flex mobile:flex-col justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{cargo}</h3>
        <span className="text-sm text-gray-400">
          {inicio} - {fim}
        </span>
      </div>
      <p className="text-gray-300">{descricao}</p>
    </div>
  );
};

export default Home;
