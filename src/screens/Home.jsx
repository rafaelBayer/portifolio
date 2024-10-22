import React from "react";

import Template from "./template/Template";
import Imagem from "../assets/codeImage.png";
import { BsChatRightTextFill } from "react-icons/bs";
import { DiPhp } from "react-icons/di";
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

      <div id="sobre" className="text-white flex flex-col tablet:flex-row p-12">
        <div className="bg-gray-800 w-full flex flex-col items-center justify-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold tablet:text-4xl mb-4">Sobre mim</h2>
          <p>
            Especialista em desenvolvimento web com foco em React.js e PHP, com vasta experiência no desenvolvimento de sistemas
            web, consumindo APIs RESTful. Possuo sólida experiência em trabalho em equipe e liderança, tendo liderado equipes de
            desenvolvimento e auxiliado novos membros, contribuindo para o sucesso dos projetos.
          </p>
        </div>
      </div>

      <div id="experiencia" className="text-white flex flex-col p-12">
        <Experiencia
          experiencias={[
            {
              empresa: "Segure - Segurança do trabalho",
              cargo: "Desenvolvedor full-stack | Pleno",
              inicio: "Junho 2024",
              fim: "Presente",
              descricao: "Desenvolver e manter o sistema web, sou responsavel por gerir a equipe e.",
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
              cargo: "Desenvolvedor full-stack | Junior",
              inicio: "Junho 2022",
              fim: "Junho 2024",
              descricao: "A",
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
              descricao: "A",
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

        {/* <Experiencia
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
        /> */}
      </div>
    </Template>
  );
};

const Experiencia = ({ experiencias }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounde-lg shadow-lg mb-4">
      {experiencias.map((item) => (
        <div key={item.id} className="mb-4 p-2 rounded-lg hover:bg-gray-700 transition duration-300">
          <div className="flex moblile:flex-col justify-between items-center">
            <span className="text-sm text-gray-400">
              {item.inicio} - {item.fim}
            </span>
            <h3 className="mobile:text-sm text-lg font-semibold">{item.cargo}</h3>
            <h3 className="mobile:hidden text-lg font-semibold">{item.empresa}</h3>
          </div>

          <div className="laptop:hidden flex items-center text-center mt-2">
            <h4 className="text-sm font-semibold">{item.empresa}</h4>
          </div>

          <div className="flex items-center">
            <p className="mobile:text-center mobile:pt-4 laptop:p-4 text-gray-300">{item.descricao}</p>
          </div>

          {!isEmpty(item.tecnologias) && (
            <div className="flex flex-wrap space-x-2 space-y-2">
              {item.tecnologias.map((tecnologia, index) => (
                <div
                  key={"tecnologia-" + index + "-" + experiencias.id}
                  className="flex items-center p-2 bg-blue-700 rounded-full text-white m-2"
                >
                  <span>{tecnologia.nome}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    // <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-4">
    //   {cargos.map((item, index) => (
    //     <div key={index} className="border-b border-black">
    //       <div className="flex mobile:flex-col items-center mb-2 me-2 ">
    //         <h3 className="w-1/3 text-lg font-semibold">{item.cargo}</h3>
    //         <span className="w-2/3 text-sm text-gray-400">
    //           {item.inicio} - {item.fim}
    //         </span>
    //       </div>

    //       <div>
    //         <p className="text-gray-300">descrição</p>

    //       </div>

    //     </div>
    //   ))}
    // </div>
  );
};

export default Home;
