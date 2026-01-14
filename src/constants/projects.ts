import devCurrencyImg from '../assets/projects/DevCurrency.png'
import devLinkImg from '../assets/projects/Linktree.png'
import primeFlixImg from '../assets/projects/PrimeFlix.png'

export interface Project {
  title: string;
  description: string;
  image: string;
  techs: string[];
  demo: string;
  code: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'DevLink',
    description: 'O DevLink é uma plataforma de gerenciamento de links personalizada para desenvolvedores, inspirada no Linktree. A aplicação conta com um sistema de autenticação robusto via Firebase, permitindo que cada usuário gerencie seus próprios links, redes sociais e personalize a estética da sua página de perfil em tempo real.',
    image: devLinkImg,
    techs: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    demo: 'https://devlinktree-drab.vercel.app/',
    code: 'https://github.com/C-Herik-Dev/Estudos/tree/main/Estudos-Projetos/Projetos/DevLinktree',
  },
  {
    title: 'PrimeFlix',
    description: 'Desenvolvido com React, o PrimeFlix é um portal dinâmico para entusiastas de cinema. A aplicação consome a API do TMDB para listar filmes em cartaz, detalhes técnicos, sinopses e trailers. Possui funcionalidades avançadas como salvamento de favoritos no LocalStorage e roteamento inteligente com React Router.',
    image: primeFlixImg,
    techs: ['React', 'API Rest', 'Hooks', 'Styled Components'],
    demo: 'https://primefllix.vercel.app/',
    code: 'https://github.com/C-Herik-Dev/Estudos/tree/main/Estudos-Projetos/Projetos/PrimeFlix',
  },
  {
    title: 'DevCurrency',
    description: 'Uma ferramenta financeira de alta performance para monitoramento de criptomoedas. O DevCurrency utiliza TypeScript para garantir a consistência dos dados recebidos via API, oferecendo cotações em tempo real, gráficos de variação e detalhes específicos de cada moeda do mercado global de ativos digitais.',
    image: devCurrencyImg,
    techs: ['React', 'TypeScript', 'API Rest', 'Lucide React'],
    demo: 'https://devcurrency-plum.vercel.app/',
    code: 'https://github.com/C-Herik-Dev/Estudos/tree/main/Estudos-Projetos/Projetos/DevCurrency',
  },
]

export const SKILLS = ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Firebase', 'Git & GitHub', 'API REST', 'Vite']