import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="text-center">
        <p className="mb-4">© 2024 Rafael Bayer. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-x-4">
          <a
            href="https://github.com/rafaelBayer"
            target="_blank"
            rel="noopener noreferrer"
            title="Clique para acessar o Github"
            className="hover:text-accent inline-flex items-center gap-x-1"
          >
            <AiFillGithub size="1rem" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rafaelbayer0/"
            target="_blank"
            rel="noopener noreferrer"
            title="Clique para acessar o Linkedin"
            className="hover:text-accent inline-flex items-center gap-x-1"
          >
            <AiFillLinkedin size="1rem" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
