import { plannedSections } from './planned-case'
import type { ProjectData } from './types'

const objectives = [
  'Analisar faturamento.',
  'Identificar produtos mais vendidos.',
  'Calcular ticket médio.',
  'Analisar comportamento dos clientes.',
  'Identificar tendências de vendas.',
  'Criar dashboards interativos.',
]

export const salesIntelligence: ProjectData = {
  slug: 'sales-intelligence',
  name: 'Sales Intelligence',
  subtitle: 'Análise Comercial',
  category: 'Inteligência comercial',
  context: 'Projeto independente',
  status: 'Planejado',
  published: true,
  statusNote: 'Projeto planejado. Ainda não possui código, dados ou resultados.',
  illustration: 'sales',
  summary: 'Projeto de inteligência comercial para análise de vendas de uma loja de eletrônicos.',
  problem: 'Entender o que sustenta o faturamento, quais produtos vendem mais e como os clientes compram.',
  technologies: {
    used: [],
    planned: ['Python', 'Pandas', 'SQL', 'SQLite', 'Streamlit', 'Plotly'],
  },
  images: [],
  links: { github: null, demo: null },
  sections: plannedSections({
    overview:
      'O Sales Intelligence pretende organizar dados de vendas de uma loja de eletrônicos para responder perguntas comerciais em dashboards interativos.',
    problem:
      'Registros de vendas isolados não mostram com clareza o desempenho do negócio. O projeto busca transformá-los em indicadores de faturamento, produtos, ticket médio e comportamento de compra.',
    objectives,
  }),
}
