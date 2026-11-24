import { plannedSections } from './planned-case'
import type { ProjectData } from './types'

/** Oculto do site por decisão de escopo. Mude `published` para exibir. */
export const customerAnalytics: ProjectData = {
  slug: 'customer-analytics',
  name: 'Customer Analytics',
  subtitle: 'Segmentação de Clientes',
  category: 'Clientes',
  context: 'Projeto independente',
  status: 'Planejado',
  published: false,
  statusNote: 'Projeto planejado. Ainda não possui código, dados ou resultados.',
  illustration: 'customers',
  summary: 'Projeto de análise e segmentação de clientes.',
  problem: 'Identificar perfis e padrões de consumo para diferenciar grupos de clientes.',
  technologies: {
    used: [],
    planned: ['Python', 'Pandas', 'SQL', 'Estatística', 'Visualização de dados'],
  },
  images: [],
  links: { github: null, demo: null },
  sections: plannedSections({
    overview:
      'O Customer Analytics pretende estudar o comportamento de compra para separar clientes em segmentos com características parecidas.',
    problem:
      'Tratar todos os clientes da mesma forma dificulta entender quem compra, com que frequência e em qual valor.',
    objectives: [
      'Identificar perfis de clientes.',
      'Analisar frequência de compras.',
      'Calcular valor médio de compras.',
      'Segmentar clientes.',
      'Identificar padrões de consumo.',
    ],
  }),
}
