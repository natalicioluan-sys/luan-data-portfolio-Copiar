import { getProject } from '../projects'
import { profile } from './profile'

const defaultTitle = `${profile.name} | Data Analyst e estudante de Ciência de Dados`
const defaultDescription = `Portfólio de ${profile.name}, estudante de Ciência de Dados na UFMS, com projetos independentes em análise de dados, Python e SQL.`

export function getSeo(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/'

  if (path === '/') return { title: defaultTitle, description: defaultDescription }
  if (path === '/projetos') {
    return {
      title: `Projetos | ${profile.name}`,
      description: 'Projetos independentes de análise de dados, com o status real de cada etapa.',
    }
  }

  const slug = path.match(/^\/projetos\/([^/]+)$/)?.[1]
  const project = slug ? getProject(slug) : undefined
  if (project) {
    return { title: `${project.name} | ${profile.name}`, description: `${project.summary} Status: ${project.status}.` }
  }

  return { title: `Página não encontrada | ${profile.name}`, description: defaultDescription }
}
