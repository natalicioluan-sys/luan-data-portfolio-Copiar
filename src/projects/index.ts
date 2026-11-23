import { cambiocde } from './cambiocde'
import { customerAnalytics } from './customer-analytics'
import { salesIntelligence } from './sales-intelligence'
import { tradingAnalytics } from './trading-analytics'
import type { ProjectCategory } from './types'

/** Para publicar um novo projeto, crie o arquivo e adicione-o aqui. */
export const projects = [salesIntelligence, cambiocde, tradingAnalytics, customerAnalytics]

export const projectCategories = [...new Set(projects.map((project) => project.category))] as ProjectCategory[]

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
