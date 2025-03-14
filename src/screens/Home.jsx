import React, { useEffect, useRef } from "react";

import Template from "./template/Template";
import Imagem from "../assets/codeImage.png";
import { isEmpty } from "../components/Util";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";

const Home = () => {
  const page = "Home";

  const typingRef = useRef();

  useEffect(() => {
    console.log(typingRef.current)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-typing');
        }
      },
      { threshold: 0.5 }
    );

    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Template page={page}>
      {/* <div id="home" className="text-white flex flex-col tablet:flex-row p-12">
        <div className="animate-fade-in"></div>
        <h2 className="text-accent font-mono">Teste</h2>

        
      </div> */}

      <section className="min-h-screen flex items-center justify-center relative">
        <div className="section-container">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-accent font-mono">Olá, eu sou</h2>
            <h1 className="text-4xl mobile:text-2xl tablet:text-6xl font-bold">
            {/* mobile:text-6xl tablet:text-7xl */}
              <div 
              ref={typingRef} 
              className="text-white overflow-hidden whitespace-nowrap border-r-4 border-accent">
                Desenvolvedor Fullstack
              </div>
            </h1>
            <p className="text-foreground/70 max-w-xl text-lg">
              Especializado em criar experiências digitais excepcionais. Foco em desenvolvimento web moderno com React,
              Node.js e tecnologias cloud.
            </p>
            <button className="group flex items-center gap-2 text-accent hover:text-accent-hover transition-colors">
              Ver Projetos
              {/* <ArrowRight className="group-hover:translate-x-1 transition-transform" /> */}
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />
      </section>

      {/* Sobre Mim */}
      <div id="sobre" className="text-white flex flex-col tablet:flex-row p-12">
        <div className="bg-card w-full flex flex-col items-center justify-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold tablet:text-4xl mb-4">Sobre mim</h2>
          <p>
            Desenvolvedor web especializado em React.js e PHP, 3 anos de experiência criando e otimizando sistemas web
            robustos, focados no consumo de APIs RESTful. Possuo sólida experiência em liderar equipes de
            desenvolvimento, promovendo colaboração eficaz e mentorando novos integrantes para garantir entregas
            bem-sucedidas e projetos de alta qualidade.
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
      <section id="contato" className="section-container text-white">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-2xl font-bold">Vamos conversar?</h2>
          <p className="text-foreground/70">
            Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem um projeto em mente ou
            apenas quer trocar uma ideia, entre em contato!
          </p>

          <div className="flex justify-center gap-6">
            <a
              className="p-3 glass rounded-full hover:text-accent transition-colors"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/rafaelbayer0/"
              target="_blank"
              rel="noopener noreferrer"
              title="Clique para acessar o Linkedin"
            >
              <AiFillLinkedin size={24} />
            </a>

            <a
              className="p-3 glass rounded-full hover:text-accent transition-colors"
              aria-label="LinkedIn"
              href="https://github.com/rafaelBayer"
              target="_blank"
              rel="noopener noreferrer"
              title="Clique para acessar o Github"
            >
              <AiFillGithub size={24} />
            </a>

            <a
              className="p-3 glass rounded-full hover:text-accent transition-colors"
              aria-label="LinkedIn"
              href="mailto:rafaelbayer00@gmail.com"
              title="Clique para entrar em contato via Email"
            >
              <AiOutlineMail size={24} />
            </a>
          </div>
        </div>
      </section>
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
