import type { Project } from './types'

export const customerAnalytics: Project = {
  slug: 'customer-analytics',
  number: '04',
  name: 'Customer Analytics',
  category: 'Clientes',
  status: 'Planejado',
  illustration: 'customers',
  summary: 'Projeto de análise e segmentação de clientes.',
  problem: 'Identificar perfis e padrões de consumo para diferenciar grupos de clientes.',
  technologies: ['Python', 'Pandas', 'SQL', 'Estatística', 'Visualização de dados'],
  objectives: [
    'Identificar perfis de clientes.',
    'Analisar frequência de compras.',
    'Calcular valor médio de compras.',
    'Segmentar clientes.',
    'Identificar padrões de consumo.',
  ],
  links: { github: null, demo: null },
  caseStudy: {
    overview: [
      'O Customer Analytics estuda o comportamento de compra para separar clientes em segmentos com características parecidas.',
    ],
    businessProblem: [
      'Tratar todos os clientes da mesma forma dificulta entender quem compra, com que frequência e em qual valor. A segmentação busca tornar essas diferenças visíveis.',
    ],
    dataSources: null,
    dataProcessing: null,
    exploratoryAnalysis: null,
    visualizations: [
      {
        kind: 'bar',
        title: 'Exemplo de formato: clientes por segmento',
        measure: 'Clientes',
        source: 'demo',
        points: [
          { label: 'Ocasionais', value: 340 },
          { label: 'Recorrentes', value: 210 },
          { label: 'Novos', value: 160 },
          { label: 'Inativos', value: 110 },
          { label: 'Alto valor', value: 60 },
        ],
      },
    ],
    findings: null,
    conclusions: null,
  },
}
