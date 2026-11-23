import type { Project } from './types'

export const cambiocde: Project = {
  slug: 'cambiocde',
  number: '02',
  name: 'CambioCDE',
  category: 'Finanças',
  status: 'Em desenvolvimento',
  illustration: 'exchange',
  summary: 'Aplicação de monitoramento e inteligência cambial, com foco nas relações entre real, guarani e dólar.',
  problem: 'Reunir cotações e histórico de real, guarani e dólar para facilitar a comparação entre as moedas.',
  technologies: ['Python', 'APIs', 'SQL', 'Banco de dados', 'Visualização de dados'],
  objectives: [
    'Acompanhar cotações.',
    'Armazenar histórico cambial.',
    'Calcular variações percentuais.',
    'Comparar moedas.',
    'Criar análises históricas.',
    'Desenvolver dashboards.',
    'Implementar módulos de analytics.',
  ],
  links: { github: null, demo: null },
  caseStudy: {
    overview: [
      'O CambioCDE é uma aplicação para acompanhar, armazenar e analisar cotações entre real, guarani e dólar.',
    ],
    businessProblem: [
      'Uma cotação isolada diz pouco sobre o movimento do câmbio. O projeto busca manter um histórico próprio e calcular variações que permitam comparar as moedas ao longo do tempo.',
    ],
    dataSources: null,
    dataProcessing: null,
    exploratoryAnalysis: null,
    visualizations: [
      {
        kind: 'line',
        title: 'Exemplo de formato: variação indexada de uma moeda',
        measure: 'Índice (base 100)',
        source: 'demo',
        points: [
          { label: 'Mês 1', value: 100 },
          { label: 'Mês 2', value: 102 },
          { label: 'Mês 3', value: 101 },
          { label: 'Mês 4', value: 104 },
          { label: 'Mês 5', value: 107 },
          { label: 'Mês 6', value: 105 },
          { label: 'Mês 7', value: 103 },
          { label: 'Mês 8', value: 106 },
          { label: 'Mês 9', value: 109 },
          { label: 'Mês 10', value: 108 },
          { label: 'Mês 11', value: 111 },
          { label: 'Mês 12', value: 110 },
        ],
      },
    ],
    findings: null,
    conclusions: null,
  },
}
