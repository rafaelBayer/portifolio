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
            Sou desenvolvedor fullstack e gosto de criar soluções que realmente
            façam sentido para o usuário e para o negócio. Tenho experiência no
            desenvolvimento de interfaces, sistemas e integrações, sempre
            buscando escrever códigos mais organizados, reutilizáveis e fáceis
            de manter.
          </p>
          <p className="text-foreground/70">
            Também tenho facilidade em me comunicar, trocar ideias com o time e
            entender as necessidades de cada demanda. Além do desenvolvimento,
            atuo na organização de tarefas e apoio na gestão de equipe, ajudando
            a manter um fluxo de trabalho mais claro, produtivo e alinhado com
            os objetivos do projeto.
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
