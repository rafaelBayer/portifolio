import React from "react";

const Footer = () => {
  return (
    <footer class="text-white py-8">
      <div class="text-center">
        <p class="mb-4">© 2024 Meu Nome. Todos os direitos reservados.</p>
        <div class="flex justify-center space-x-4">
          <a href="https://github.com" class="hover:text-blue-500">
            GitHub
          </a>
          <a href="https://linkedin.com" class="hover:text-blue-500">
            LinkedIn
          </a>
          <a href="https://twitter.com" class="hover:text-blue-500">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
