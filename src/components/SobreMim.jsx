import React from "react";

const SobreMim = () => {
  const tecnologias = ["React.js", "PHP", "MySQL", "Node.js", "Vue.js", "Git", "Docker"];
  return (
    <section id="sobre" className="section-container">
      <div className="grid tablet:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-white text-2xl font-bold">Sobre mim</h2>
          <p className="text-foreground/70">
          Sou um desenvolvedor fullstack com experiência em React.js, PHP e MySQL, criando soluções eficientes e escaláveis. Tenho boa comunicação, gosto de trocar ideias, dar opiniões e trabalhar em equipe para melhorar processos e otimizar sistemas. Além de programar, também gerencio equipes, organizo demandas e distribuo tarefas para garantir um fluxo de trabalho produtivo.
          </p>

          <div className="flex flex-wrap gap-2">
            {tecnologias.map((tecnologia, index) => (
              <Badge conteudo={tecnologia} key={index} />
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-accent/20 rounded-lg transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Workspace"
            className="rounded-lg object-cover w-full aspect-[4/3] relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

const Badge = ({ conteudo }) => {
  return <div className="pilula inline-flex items-center">{conteudo}</div>;
};

export default SobreMim;
