/**
 * Dados pessoais do site. Preencha com valores reais.
 * Campos com `null` não aparecem na versão publicada.
 */
export const profile = {
  name: 'Luan',
  role: 'Data Analyst | Data Science Student',
  tagline: 'Transformando dados em informações, informações em insights e insights em decisões.',
  intro:
    'Sou estudante de Ciência de Dados na UFMS e construo projetos próprios para praticar análise de dados com Python e SQL, do tratamento da base à visualização.',
  about: [
    'Estudo Ciência de Dados na Universidade Federal de Mato Grosso do Sul e estou no início da minha formação na área.',
    'Meu aprendizado acontece principalmente na prática. Desenvolvo projetos independentes com Python, SQL e ferramentas de visualização para transformar o que estudo em algo que eu possa testar, errar e melhorar.',
    'Tenho interesse em análise de dados, engenharia de dados, programação, automação e inteligência de negócios. Este portfólio registra essa evolução, incluindo o que ainda está em andamento.',
  ],
  interests: ['Análise de dados', 'Engenharia de dados', 'Programação', 'Automação', 'Inteligência de negócios'],
  education: {
    course: 'Ciência de Dados',
    institution: 'Universidade Federal de Mato Grosso do Sul (UFMS)',
    status: 'Em andamento',
  },
  location: 'Ciudad del Este, Paraguai',
  contact: {
    github: 'https://github.com/natalicioluan-sys' as string | null,
    linkedin: null as string | null, // ex.: 'https://www.linkedin.com/in/seu-perfil'
    email: null as string | null, // ex.: 'voce@exemplo.com'
  },
  /** URL final do site, usada em SEO. Ex.: 'https://seudominio.com' */
  siteUrl: null as string | null,
}
