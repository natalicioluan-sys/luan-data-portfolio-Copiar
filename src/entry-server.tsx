import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppRoutes } from './App'
import { profile } from './data/profile'
import { projects } from './projects'

export { getSeo } from './data/seo'

export const siteUrl = profile.siteUrl
export const prerenderRoutes = ['/', '/projetos', ...projects.map((project) => `/projetos/${project.slug}`)]

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
}
