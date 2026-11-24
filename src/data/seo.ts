import { getProject } from '../projects'
import { profile } from './profile'

const defaultTitle = `${profile.name} | Ciência de Dados, BI e Desenvolvimento`
const defaultDescription = `Portfólio de ${profile.name}, estudante de Ciência de Dados na UFMS, com experiência no mercado financeiro e projetos práticos em dados e desenvolvimento.`

export function getSeo(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/'

  if (path === '/') return { title: defaultTitle, description: defaultDescription }
  if (path === '/projetos') {
    return {
      title: `Projetos | ${profile.name}`,
      description: 'Projetos de dados e desenvolvimento, separados pelo estágio real de cada um.',
    }
  }

  const slug = path.match(/^\/projetos\/([^/]+)$/)?.[1]
  const project = slug ? getProject(slug) : undefined
  if (project) {
    return {
      title: `${project.name} — ${project.subtitle} | ${profile.name}`,
      description: `${project.summary} Status: ${project.status}.`,
    }
  }

  return { title: `Página não encontrada | ${profile.name}`, description: defaultDescription }
}
