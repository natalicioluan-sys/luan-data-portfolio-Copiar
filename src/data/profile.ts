export interface Experience {
  organization: string
  role: string
  period: string | null
  summary: string
  highlights: string[]
}

/**
 * Dados pessoais e profissionais do site.
 * Campos com `null` não aparecem na versão publicada.
 */
export const profile = {
  name: 'Luan Natalício',
  role: 'Estudante de Ciência de Dados | Dados, BI e Desenvolvimento',
  tagline: 'Transformando dados em informações, informações em insights e insights em decisões.',
  intro: [
    'Sou estudante de Ciência de Dados pela UFMS, com experiência profissional no mercado financeiro, atendimento e análise comercial. Atualmente, direciono minha trajetória para Ciência de Dados, Business Intelligence e desenvolvimento de soluções orientadas por dados.',
    'Tenho interesse em transformar informações em análises úteis para compreender problemas, identificar oportunidades e apoiar decisões de negócio. Desenvolvo projetos práticos utilizando Python, SQL e ferramentas de visualização de dados.',
  ],
  about: [
    'Sou graduando em Ciência de Dados pela Universidade Federal de Mato Grosso do Sul, na modalidade EAD, com formação em andamento.',
    'Minha atuação como Gerente de Contas no Sicredi Evolução me aproximou de análise de crédito, informações financeiras, indicadores e metas comerciais. Essa experiência, somada ao trabalho com atendimento e vendas, é uma das bases da minha transição para a área de dados.',
    'Hoje construo projetos práticos para aprofundar programação, bancos de dados e visualização, registrando neste portfólio também o que ainda está em andamento.',
  ],
  objective: 'Oportunidades em Ciência de Dados, Análise de Dados, Business Intelligence e Desenvolvimento.',
  interests: ['Ciência de Dados', 'Análise de Dados', 'Business Intelligence', 'Desenvolvimento', 'Automação'],
  education: {
    course: 'Ciência de Dados',
    institution: 'Universidade Federal de Mato Grosso do Sul (UFMS)',
    modality: 'EAD',
    status: 'Em andamento',
  },
  experience: [
    {
      organization: 'Sicredi Evolução',
      role: 'Gerente de Contas',
      period: 'Agosto de 2024 a julho de 2025',
      summary:
        'Experiência no mercado financeiro que desenvolveu familiaridade com indicadores, análise financeira, relacionamento com clientes e tomada de decisão.',
      highlights: [
        'Atendimento e relacionamento com clientes pessoa física e jurídica.',
        'Análise de crédito e avaliação de capacidade de pagamento.',
        'Análise de informações financeiras e cadastrais.',
        'Acompanhamento de indicadores e metas comerciais.',
        'Oferta de produtos e soluções financeiras.',
        'Utilização de informações e dados para apoiar decisões comerciais.',
      ],
    },
    {
      organization: 'Comércio, atendimento e vendas',
      role: 'Experiência complementar',
      period: null,
      summary:
        'Atuação com atendimento ao público, operações comerciais, vendas e relacionamento com clientes, que contribui para entender necessidades e processos de negócio.',
      highlights: [],
    },
  ] satisfies Experience[],
  certifications: [
    { name: 'CPA-10', issuer: 'ANBIMA' },
    { name: 'CPA-20', issuer: 'ANBIMA' },
  ],
  location: 'Ciudad del Este, Paraguai',
  contact: {
    github: 'https://github.com/natalicioluan-sys' as string | null,
    linkedin: 'https://www.linkedin.com/in/luan-natalicio' as string | null,
    email: 'natalicioluan@gmail.com' as string | null,
  },
  /** URL final do site, usada em SEO. Ex.: 'https://seudominio.com' */
  siteUrl: 'https://luan-data-portfolio-copiar.vercel.app' as string | null,
}
