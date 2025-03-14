import React from 'react'

const Experiencia = () => {
    const experiencias = [
        {
          empresa: "Segure - Segurança do trabalho",
          cargo: "Desenvolvedor full-stack - Pleno",
          inicio: "Junho 2024",
          fim: "Presente",
          descricao:
            "Responsável por desenvolver soluções completas, desde a interface (frontend) com React.js até a integração com o backend em PHP (CodeIgniter), otimizando a segurança e a performance dos sistemas.",
          tecnologias: [
            {nome: "React.js",  },
            {nome: "PHP",  },
            {nome: "Codeigniter",  },
            {nome: "Mysql",  },
            {nome: "Git",  },
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
            {nome: "React.js",  },
            {nome: "PHP",  },
            {nome: "Codeigniter",  },
            {nome: "Mysql",  },
            {nome: "Git",  },
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
            {nome: "React.js",  },
            {nome: "PHP",  },
            {nome: "Codeigniter",  },
            {nome: "Mysql",  },
            {nome: "Git",  },
          ],
        },
      ]
  return (
    <section id="experiencia" className="section-container">
        <h2 className="text-2xl font-bold mb-12 mobile:mb-5 mobile:text-xl">Experiência Profissional</h2>
        <div className="space-y-12">
            {experiencias.map((experiencia, index) => (
                <div key={`experiencia-${index}`} className='glass p-6 mobile:p-4 rounded-lg space-y-4 card-hover'>
                    <div className="flex justify-between items-start flex-wrap">
                        <div>
                            <h3 className="text-xl mobile:text-lg font-semibold">{experiencia.cargo}</h3>
                            <p className="text-accent mobile:text-sm">{experiencia.empresa}</p>
                        </div>
                        <span className="text-foreground/50 mobile:text-sm">{experiencia.inicio} - {experiencia.fim}</span>
                    </div>
                    <p className="text-foreground/70 mobile:text-sm">{experiencia.descricao}</p>
                    <div className="flex flex-wrap gap-2">
                        {experiencia.tecnologias.map((tecnologia, indexTecnologia) => (
                            <span key={`tecnologia-${indexTecnologia}-${index}`} className="text-sm mobile:text-xs px-3 py-1 rounded-full bg-card-hover text-foreground/70">{tecnologia.nome}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Experiencia