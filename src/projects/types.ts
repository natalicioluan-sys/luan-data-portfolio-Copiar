export type ProjectStatus = 'Concluído' | 'Em desenvolvimento' | 'Planejado'
export type ProjectCategory = 'Inteligência financeira' | 'Inteligência comercial' | 'Clientes' | 'Desenvolvimento web'
export type ProjectContext = 'Projeto independente' | 'Projeto acadêmico'
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

/** Captura real da aplicação, salva em `public/images/projects/<slug>/`. */
export interface ProjectImage {
  src: string
  alt: string
  caption: string
  width: number
  height: number
  device?: 'desktop' | 'mobile'
}

export interface ArchitectureStep {
  title: string
  detail: string
}

/** Blocos que compõem uma seção do estudo de caso. */
export type CaseBlock =
  | { type: 'text'; paragraphs: string[] }
  | { type: 'list'; items: string[]; tone: 'implemented' | 'planned' | 'objective' | 'learning' }
  | { type: 'architecture'; steps: ArchitectureStep[]; note?: string }
  | { type: 'notice'; text: string }
  | { type: 'technologies' }
  | { type: 'gallery' }
  | { type: 'charts'; charts: ChartSpec[] }
  | { type: 'repository' }
  | { type: 'pending' }

export interface CaseSection {
  id: string
  title: string
  blocks: CaseBlock[]
}

export interface ProjectData {
  slug: string
  name: string
  subtitle: string
  category: ProjectCategory
  context: ProjectContext
  status: ProjectStatus
  /** `false` mantém o arquivo, mas oculta o projeto do site. */
  published: boolean
  /** Explica o estágio atual quando o status sozinho não basta. */
  statusNote?: string
  illustration: IllustrationKind
  summary: string
  problem: string
  technologies: {
    /** Confirmadas no código do projeto. */
    used: string[]
    /** Previstas e ainda não implementadas. */
    planned: string[]
  }
  images: ProjectImage[]
  /** Recorte 2:1 opcional para o card. Sem ele, o card usa a primeira imagem. */
  cardImage?: string
  links: {
    github: string | null
    demo: string | null
  }
  sections: CaseSection[]
}

export interface Project extends ProjectData {
  /** Gerado pela ordem de publicação em `src/projects/index.ts`. */
  number: string
}
