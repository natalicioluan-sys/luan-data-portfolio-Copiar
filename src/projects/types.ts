export type ProjectStatus = 'Concluído' | 'Em desenvolvimento' | 'Planejado'
export type ProjectCategory = 'Inteligência comercial' | 'Finanças' | 'Clientes'
export type IllustrationKind = 'sales' | 'exchange' | 'trading' | 'customers'

export interface ChartPoint {
  label: string
  value: number
}

export interface ChartSpec {
  kind: 'bar' | 'line'
  title: string
  /** Nome da medida exibida. Ex.: 'Unidades'. */
  measure: string
  /** `demo` exibe um aviso de dados fictícios. Use `real` somente com dados reais. */
  source: 'demo' | 'real'
  points: ChartPoint[]
}

/** Parágrafos da seção. `null` exibe a seção como pendente. */
export type CaseContent = string[] | null

export interface CaseStudy {
  overview: string[]
  businessProblem: string[]
  dataSources: CaseContent
  dataProcessing: CaseContent
  exploratoryAnalysis: CaseContent
  visualizations: ChartSpec[]
  findings: CaseContent
  conclusions: CaseContent
}

export interface Project {
  slug: string
  number: string
  name: string
  category: ProjectCategory
  status: ProjectStatus
  illustration: IllustrationKind
  summary: string
  problem: string
  technologies: string[]
  objectives: string[]
  links: {
    github: string | null
    demo: string | null
  }
  caseStudy: CaseStudy
}
