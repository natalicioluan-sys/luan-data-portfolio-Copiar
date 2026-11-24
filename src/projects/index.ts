import { cambiocde } from './cambiocde'
import { customerAnalytics } from './customer-analytics'
import { dailyTasks } from './daily-tasks'
import { quantIntelligence } from './quant-intelligence'
import { salesIntelligence } from './sales-intelligence'
import { tradingAnalytics } from './trading-analytics'
import type { Project, ProjectCategory, ProjectData, ProjectStatus } from './types'

/**
 * A ordem desta lista define a ordem no site.
 * Projetos com `published: false` ficam guardados, mas não aparecem nem geram página.
 */
const allProjects: ProjectData[] = [
  cambiocde,
  quantIntelligence,
  dailyTasks,
  salesIntelligence,
  tradingAnalytics,
  customerAnalytics,
]

export const projects: Project[] = allProjects
  .filter((project) => project.published)
  .map((project, index) => ({ ...project, number: String(index + 1).padStart(2, '0') }))

export const projectCategories = [...new Set(projects.map((project) => project.category))] as ProjectCategory[]

/** Ordem dos grupos na página de projetos. */
export const statusOrder: ProjectStatus[] = ['Em desenvolvimento', 'Concluído', 'Planejado']

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
