import React from "react";

import Template from "./template/Template";
import Imagem from "../assets/codeImage.png";
import { isEmpty } from "../components/Util";

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

      {/* Sobre Mim */}
      <div id="sobre" className="text-white flex flex-col tablet:flex-row p-12">
        <div className="bg-gray-800 w-full flex flex-col items-center justify-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold tablet:text-4xl mb-4">Sobre mim</h2>
          <p>
          Desenvolvedor web especializado em React.js e PHP, 3 anos de experiência criando e otimizando sistemas web robustos, focados no consumo de APIs RESTful.
          Possuo sólida experiência em liderar equipes de desenvolvimento, promovendo colaboração eficaz e mentorando novos integrantes para garantir entregas bem-sucedidas e projetos de alta qualidade.
          </p>
        </div>
      </div>
      {/* Sobre Mim */}

      {/* Experiencias */}
      <div id="experiencia" className="text-white flex flex-col p-12">
        <Experiencia
          experiencias={[
            {
              empresa: "Segure - Segurança do trabalho",
              cargo: "Desenvolvedor full-stack - Pleno",
              inicio: "Junho 2024",
              fim: "Presente",
              descricao: "Responsável por desenvolver soluções completas, desde a interface (frontend) com React.js até a integração com o backend em PHP (CodeIgniter), otimizando a segurança e a performance dos sistemas.",
              tecnologias: [
                { id: 1, nome: "React.js", icone: "" },
                { id: 2, nome: "PHP", icone: "" },
                { id: 3, nome: "Codeigniter", icone: "" },
                { id: 4, nome: "Mysql", icone: "" },
                { id: 5, nome: "Git", icone: "" },
              ],
            },
            {
              empresa: "Segure - Segurança do trabalho",
              cargo: "Desenvolvedor full-stack - Junior",
              inicio: "Junho 2022",
              fim: "Junho 2024",
              descricao: "Focado em evoluir sistemas existentes, implementando novas funcionalidades e corrigindo bugs em colaboração com uma equipe ágil.",
              tecnologias: [
                { id: 1, nome: "React.js", icone: "" },
                { id: 2, nome: "PHP", icone: "" },
                { id: 3, nome: "Codeigniter", icone: "" },
                { id: 4, nome: "Mysql", icone: "" },
                { id: 5, nome: "Git", icone: "" },
              ],
            },
            {
              empresa: "Segure - Segurança do trabalho",
              cargo: "Estagiario em programação",
              inicio: "Dezembro 2021",
              fim: "Junho 2022",
              descricao: "Contribuí com tarefas de suporte ao desenvolvimento, ganhando experiência prática com React.js, PHP e ferramentas de versionamento como Git.",
              tecnologias: [
                { id: 1, nome: "React.js", icone: "" },
                { id: 2, nome: "PHP", icone: "" },
                { id: 3, nome: "Codeigniter", icone: "" },
                { id: 4, nome: "Mysql", icone: "" },
                { id: 5, nome: "Git", icone: "" },
              ],
            },
          ]}
        />
      </div>
      {/* Experiencias */}
    </Template>
  );
};

const Experiencia = ({ experiencias }) => {
  const Tecnologias = ({ tecnologia, experienciaId }) => {
    return (
      <div
        key={"tecnologia-" + tecnologia.id + "-" + experienciaId}
        className="p-1 items-center mr-2 rounded-md hover:bg-blue-500 transition-colors duration-200"
      >
        {tecnologia.nome}
      </div>
    );
  };
  return (
    <div className="bg-gray-800 text-white p-6 rounde-lg shadow-lg mb-4">
      {experiencias.map((item) => (
        <div key={item.id} className="mb-4 p-2 rounded-lg hover:bg-gray-700 transition duration-300">
          <div className="flex mobile:flex-col laptop:space-x-6 mobile:space-y-2 items-center">
            <span className="text-sm text-gray-400">
              {item.inicio} - {item.fim}
            </span>
            <h3 className="mobile:text-sm text-lg font-semibold">{item.cargo}</h3>
            <h3 className="mobile:text-sm text-lg font-semibold">{item.empresa}</h3>
          </div>

          <div className="flex items-center">
            <p className="mobile:text-center mobile:pt-4 laptop:p-4 text-gray-300">{item.descricao}</p>
          </div>

          {!isEmpty(item.tecnologias) && (
            <div className="flex flex-wrap mt-4 items-center mobile:text-sm">
              <strong className="pe-2">Tecnologias:</strong>
              {item.tecnologias.map((tecnologia) => (
                <Tecnologias tecnologia={tecnologia} experienciaId={item.id} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
