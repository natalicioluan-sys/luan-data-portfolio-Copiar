import type { Project } from './types'

export const tradingAnalytics: Project = {
  slug: 'trading-analytics',
  number: '03',
  name: 'Trading Analytics',
  category: 'Finanças',
  status: 'Planejado',
  illustration: 'trading',
  summary: 'Plataforma de análise estatística de operações financeiras.',
  problem: 'Avaliar um histórico de operações com métricas estatísticas, em vez de impressões sobre o desempenho.',
  technologies: ['Python', 'Pandas', 'SQL', 'Visualização de dados'],
  objectives: [
    'Analisar histórico de operações.',
    'Calcular taxa de acerto.',
    'Calcular payoff.',
    'Calcular profit factor.',
    'Analisar drawdown.',
    'Avaliar expectativa matemática.',
    'Investigar horários e padrões operacionais.',
  ],
  links: { github: null, demo: null },
  caseStudy: {
    overview: [
      'O Trading Analytics é uma plataforma para estudar estatisticamente um histórico de operações financeiras. O foco é análise de dados e não recomendação de investimento.',
    ],
    businessProblem: [
      'Olhar apenas para o resultado acumulado esconde risco e consistência. O projeto reúne métricas como taxa de acerto, payoff, profit factor, drawdown e expectativa matemática para uma leitura mais completa.',
    ],
    dataSources: null,
    dataProcessing: null,
    exploratoryAnalysis: null,
    visualizations: [
      {
        kind: 'line',
        title: 'Exemplo de formato: resultado acumulado por operação',
        measure: 'Resultado acumulado (unidades fictícias)',
        source: 'demo',
        points: [
          { label: 'Op. 1', value: 2 },
          { label: 'Op. 2', value: 1 },
          { label: 'Op. 3', value: 4 },
          { label: 'Op. 4', value: 6 },
          { label: 'Op. 5', value: 5 },
          { label: 'Op. 6', value: 3 },
          { label: 'Op. 7', value: 2 },
          { label: 'Op. 8', value: 5 },
          { label: 'Op. 9', value: 7 },
          { label: 'Op. 10', value: 6 },
          { label: 'Op. 11', value: 9 },
          { label: 'Op. 12', value: 8 },
        ],
      },
    ],
    findings: null,
    conclusions: null,
  },
}
