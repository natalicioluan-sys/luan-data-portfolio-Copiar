import { plannedSections } from './planned-case'
import type { ProjectData } from './types'

/** Oculto até existirem materiais e implementação suficientes. */
export const tradingAnalytics: ProjectData = {
  slug: 'trading-analytics',
  name: 'Trading Analytics',
  subtitle: 'Análise Estatística de Operações',
  category: 'Inteligência financeira',
  context: 'Projeto independente',
  status: 'Planejado',
  published: false,
  statusNote: 'Projeto planejado. Ainda não possui código, dados ou resultados.',
  illustration: 'trading',
  summary: 'Plataforma de análise estatística de operações financeiras.',
  problem: 'Avaliar um histórico de operações com métricas estatísticas, em vez de impressões sobre o desempenho.',
  technologies: {
    used: [],
    planned: ['Python', 'Pandas', 'SQL', 'Visualização de dados'],
  },
  images: [],
  links: { github: null, demo: null },
  sections: plannedSections({
    overview:
      'O Trading Analytics pretende estudar estatisticamente um histórico de operações financeiras. O foco é análise de dados e não recomendação de investimento.',
    problem:
      'Olhar apenas para o resultado acumulado esconde risco e consistência. O projeto reúne métricas como taxa de acerto, payoff, profit factor, drawdown e expectativa matemática.',
    objectives: [
      'Analisar histórico de operações.',
      'Calcular taxa de acerto.',
      'Calcular payoff.',
      'Calcular profit factor.',
      'Analisar drawdown.',
      'Avaliar expectativa matemática.',
      'Investigar horários e padrões operacionais.',
    ],
  }),
}
