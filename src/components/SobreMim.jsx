const SobreMim = () => {
  const tecnologias = [
    "Next.js",
    "PHP",
    "MySQL",
    "Codeigniter",
    "jQuery",
    "Tailwind CSS",
    "Git",
  ];
  return (
    <section id="sobre" className="section-container">
      <div className="grid tablet:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-white text-2xl font-bold">Sobre mim</h2>
          <p className="text-foreground/70">
            Sou desenvolvedor fullstack com experiência em Next.js, PHP e MySQL,
            criando soluções eficientes e escaláveis. Tenho boa comunicação e
            gosto de trocar ideias e colaborar com o time para melhorar
            processos e evoluir sistemas.
          </p>
          <p className="text-foreground/70">
            Além do desenvolvimento, também atuo na organização de demandas e
            gestão de equipe, ajudando a estruturar tarefas e manter um fluxo de
            trabalho produtivo.
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
