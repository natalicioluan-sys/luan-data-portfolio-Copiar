import type { CaseSection } from './types'

interface PlannedCase {
  overview: string
  problem: string
  objectives: string[]
}

const pending = (id: string, title: string): CaseSection => ({ id, title, blocks: [{ type: 'pending' }] })

/** Estrutura padrão de um estudo de caso que ainda não tem implementação. */
export function plannedSections({ overview, problem, objectives }: PlannedCase): CaseSection[] {
  return [
    { id: 'visao-geral', title: 'Visão geral', blocks: [{ type: 'text', paragraphs: [overview] }] },
    { id: 'problema', title: 'Problema de negócio', blocks: [{ type: 'text', paragraphs: [problem] }] },
    { id: 'objetivos', title: 'Objetivos', blocks: [{ type: 'list', items: objectives, tone: 'objective' }] },
    pending('dados', 'Origem dos dados'),
    { id: 'tecnologias', title: 'Tecnologias', blocks: [{ type: 'technologies' }] },
    pending('tratamento', 'Processo de tratamento dos dados'),
    pending('exploratoria', 'Análise exploratória'),
    pending('visualizacoes', 'Visualizações'),
    pending('descobertas', 'Principais descobertas'),
    pending('conclusoes', 'Conclusões'),
    { id: 'repositorio', title: 'Repositório GitHub', blocks: [{ type: 'repository' }] },
  ]
}
