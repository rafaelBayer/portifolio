/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} shortDescription
 * @property {string} description
 * @property {string} image
 * @property {string[]=} screenshots
 * @property {string[]} technologies
 * @property {string[]} features
 * @property {string[]} highlights
 * @property {string=} githubUrl
 * @property {string=} liveUrl
 */

/** @type {Project[]} */
export const projects = [
  {
    id: "bolao-copa",
    title: "Bol\u00e3o Copa do Mundo",
    shortDescription:
      "Bol\u00e3o full stack com autentica\u00e7\u00e3o, palpites, rankings, bol\u00f5es privados e mata-mata.",
    description:
      "Aplica\u00e7\u00e3o full stack desenvolvida para gerenciar bol\u00f5es da Copa do Mundo. O sistema permite criar bol\u00f5es privados, convidar participantes, registrar palpites por partida, acompanhar rankings e montar uma chave completa de mata-mata. O projeto foi pensado para lidar com regras reais de produto, como autentica\u00e7\u00e3o, permiss\u00f5es por usu\u00e1rio, ranking por bol\u00e3o, bloqueio de palpites por prazo e separa\u00e7\u00e3o entre pontua\u00e7\u00e3o da fase de grupos, mata-mata e classifica\u00e7\u00e3o geral.",
    image: "/projects/bolao-copa/home.png",
    screenshots: [
      "/projects/bolao-copa/groups.png",
      "/projects/bolao-copa/score_live.png",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    features: [
      "Autentica\u00e7\u00e3o com Supabase Auth",
      "Cria\u00e7\u00e3o de bol\u00f5es privados",
      "Convites por link ou c\u00f3digo",
      "Palpites de placar por partida",
      "Ranking por bol\u00e3o",
      "Ranking geral, fase de grupos e mata-mata",
      "Mata-mata estilo bracket",
      "Auto-save das escolhas do mata-mata",
      "Bloqueio de palpites por prazo",
      "Scripts de sincroniza\u00e7\u00e3o com dry-run",
    ],
    highlights: [
      "Palpite global por usu\u00e1rio e partida, evitando duplicidade entre bol\u00f5es.",
      "Ranking por bol\u00e3o calculado a partir dos membros participantes.",
      "Mata-mata com auto-save e bloqueio por prazo.",
      "Regras cr\u00edticas validadas no banco/RPC, n\u00e3o apenas no front-end.",
      "Scripts de sincroniza\u00e7\u00e3o com dry-run para evitar altera\u00e7\u00f5es acidentais.",
      "Auditoria de seguran\u00e7a antes da publica\u00e7\u00e3o p\u00fablica.",
    ],
    githubUrl: "https://github.com/rafaelBayer/bolao-copa-do-mundo",
    liveUrl: "https://bolao-copa-do-mundo-gilt.vercel.app/",
  },
];
