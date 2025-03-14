import React from "react";

import { isEmpty } from "../components/Util";
import Template from "./template/Template";
import SobreMim from "../components/SobreMim";
import Introducao from "../components/Introducao";
import Contato from "../components/Contato";

const Home = () => {
  const page = "Home";

  return (
    <Template page={page}>
      <Introducao />
      <SobreMim />
      {/* Experiencias */}
      <div id="experiencia" className="text-white flex flex-col p-12">
        <Experiencia
          experiencias={[
            {
              empresa: "Segure - Segurança do trabalho",
              cargo: "Desenvolvedor full-stack - Pleno",
              inicio: "Junho 2024",
              fim: "Presente",
              descricao:
                "Responsável por desenvolver soluções completas, desde a interface (frontend) com React.js até a integração com o backend em PHP (CodeIgniter), otimizando a segurança e a performance dos sistemas.",
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
              descricao:
                "Focado em evoluir sistemas existentes, implementando novas funcionalidades e corrigindo bugs em colaboração com uma equipe ágil.",
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
              descricao:
                "Contribuí com tarefas de suporte ao desenvolvimento, ganhando experiência prática com React.js, PHP e ferramentas de versionamento como Git.",
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

      {/* Contato */}
      <Contato />
      {/* Contato */}
    </Template>
  );
};

const Experiencia = ({ experiencias }) => {
  const Tecnologias = ({ tecnologia, experienciaId }) => {
    return (
      <div
        key={"tecnologia-" + tecnologia.id + "-" + experienciaId}
        className="p-1 items-center mr-2 rounded-md hover:bg-accent hover:text-black transition-colors duration-200"
      >
        {tecnologia.nome}
      </div>
    );
  };
  return (
    <div className="bg-card text-white p-6 rounde-lg shadow-lg mb-4">
      {experiencias.map((item) => (
        <div key={item.id} className="mb-4 p-2 rounded-lg">
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
