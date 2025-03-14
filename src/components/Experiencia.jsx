import React from "react";

const Experiencia = () => {
  const experiencias = [
    {
      empresa: "Segure - Segurança do trabalho",
      cargo: "Desenvolvedor full-stack - Pleno",
      inicio: "Junho 2024",
      fim: "Presente",
      descricao:
        (
            <ul>
                <li>- Assumi a responsabilidade pelas entregas da equipe, garantindo prazos, qualidade do código e alinhamento com os objetivos do negócio.</li>
                <li>- Gerenciei a equipe de desenvolvimento, distribuindo tarefas, acompanhando o progresso e garantindo a eficiência do time.</li>
                <li>- Participei ativamente da definição de melhorias no sistema, tomando decisões técnicas e estratégicas para otimizar processos e resultados.</li>
            </ul>
        ),
      tecnologias: [{ nome: "React.js" }, { nome: "PHP" }, { nome: "Codeigniter" }, { nome: "Mysql" }, { nome: "Git" }],
    },
    {
      empresa: "Segure - Segurança do trabalho",
      cargo: "Desenvolvedor full-stack - Junior",
      inicio: "Junho 2022",
      fim: "Junho 2024",
      descricao:
        (
            <ul>
                <li>- Atuei no desenvolvimento de aplicações web utilizando PHP, MySQL, JavaScript.</li>
                <li>- Participei de reuniões sobre melhorias do sistema e necessidades do negócio, contribuindo com ideias e soluções para otimizar processos.</li>
                <li>- Auxiliei outros desenvolvedores em suas demandas, ajudando na resolução de problemas e na aplicação de boas práticas de código.</li>
            </ul>
        ),
      tecnologias: [{ nome: "React.js" }, { nome: "PHP" }, { nome: "Codeigniter" }, { nome: "Mysql" }, { nome: "Git" }],
    },
    {
      empresa: "Segure - Segurança do trabalho",
      cargo: "Estagiario em programação",
      inicio: "Dezembro 2021",
      fim: "Junho 2022",
      descricao: (
        <ul>
          <li>- Atuei no desenvolvimento de aplicações web utilizando PHP, MySQL, JavaScript.</li>

          <li>
            - Desenvolvi habilidades de comunicação e colaboração, trabalhando diretamente com desenvolvedores e
            gestores.
          </li>
          <li>
            - Aprendi a aplicar padrões de código e desenvolver um código organizado, eficiente e de fácil manutenção.
          </li>
        </ul>
      ),
      tecnologias: [{ nome: "React.js" }, { nome: "PHP" }, { nome: "Codeigniter" }, { nome: "Mysql" }, { nome: "Git" }],
    },
  ];
  return (
    <section id="experiencia" className="section-container">
      <h2 className="text-2xl font-bold mb-12 mobile:mb-5 mobile:text-xl">Experiência Profissional</h2>
      <div className="space-y-12">
        {experiencias.map((experiencia, index) => (
          <div key={`experiencia-${index}`} className="glass p-6 mobile:p-4 rounded-lg space-y-4 card-hover">
            <div className="flex justify-between items-start flex-wrap">
              <div>
                <h3 className="text-xl mobile:text-lg font-semibold">{experiencia.cargo}</h3>
                <p className="text-accent mobile:text-sm">{experiencia.empresa}</p>
              </div>
              <span className="text-foreground/50 mobile:text-sm">
                {experiencia.inicio} - {experiencia.fim}
              </span>
            </div>
            <div className="text-foreground/70 mobile:text-sm">{experiencia.descricao}</div>
            <div className="flex flex-wrap gap-2">
              {experiencia.tecnologias.map((tecnologia, indexTecnologia) => (
                <span
                  key={`tecnologia-${indexTecnologia}-${index}`}
                  className="text-sm mobile:text-xs px-3 py-1 rounded-full bg-card-hover text-foreground/70"
                >
                  {tecnologia.nome}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
