import React from "react";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";

const Contato = () => {
  return (
    <section id="contato" className="section-container text-white">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-2xl font-bold">Vamos conversar?</h2>
        <p className="text-foreground/70">
          Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem um projeto em mente ou apenas
          quer trocar uma ideia, entre em contato!
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
  );
};

export default Contato;
