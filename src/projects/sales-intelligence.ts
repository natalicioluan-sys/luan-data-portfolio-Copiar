import type { Project } from './types'

export const salesIntelligence: Project = {
  slug: 'sales-intelligence',
  number: '01',
  name: 'Sales Intelligence',
  category: 'Inteligência comercial',
  status: 'Em desenvolvimento',
  illustration: 'sales',
  summary: 'Projeto de inteligência comercial para análise de vendas de uma loja de eletrônicos.',
  problem: 'Entender o que sustenta o faturamento, quais produtos vendem mais e como os clientes compram.',
  technologies: ['Python', 'Pandas', 'SQL', 'SQLite', 'Streamlit', 'Plotly'],
  objectives: [
    'Analisar faturamento.',
    'Identificar produtos mais vendidos.',
    'Calcular ticket médio.',
    'Analisar comportamento dos clientes.',
    'Identificar tendências de vendas.',
    'Criar dashboards interativos.',
  ],
  links: { github: null, demo: null },
  caseStudy: {
    overview: [
      'O Sales Intelligence organiza dados de vendas de uma loja de eletrônicos para responder perguntas comerciais em dashboards interativos.',
    ],
    businessProblem: [
      'Registros de vendas isolados não mostram com clareza o desempenho do negócio. O projeto busca transformar esses registros em indicadores de faturamento, produtos, ticket médio e comportamento de compra.',
    ],
    dataSources: null,
    dataProcessing: null,
    exploratoryAnalysis: null,
    visualizations: [
      {
        kind: 'bar',
        title: 'Exemplo de formato: unidades vendidas por categoria',
        measure: 'Unidades',
        source: 'demo',
        points: [
          { label: 'Smartphones', value: 420 },
          { label: 'Acessórios', value: 360 },
          { label: 'Fones', value: 280 },
          { label: 'Notebooks', value: 190 },
          { label: 'Monitores', value: 120 },
        ],
      },
    ],
    findings: null,
    conclusions: null,
  },
}
