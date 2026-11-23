import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const { render, getSeo, prerenderRoutes, siteUrl } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
)
const template = await readFile(join(dist, 'index.html'), 'utf8')

const escapeHtml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

function page(route, outputRoute = route) {
  const { title, description } = getSeo(route)
  const safeTitle = escapeHtml(title)
  const safeDescription = escapeHtml(description)
  const base = siteUrl?.replace(/\/$/, '')
  const canonical = base
    ? `<link rel="canonical" href="${base}${outputRoute === '/' ? '' : outputRoute}" /><meta property="og:url" content="${base}${outputRoute === '/' ? '' : outputRoute}" />`
    : ''

  return template
    .replace(/<title>.*?<\/title>/, () => `<title>${safeTitle}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, (_, start) => start + safeDescription)
    .replace(/(<meta property="og:title" content=")[^"]*/, (_, start) => start + safeTitle)
    .replace(/(<meta property="og:description" content=")[^"]*/, (_, start) => start + safeDescription)
    .replace('<!--app-head-->', () => canonical)
    .replace('<!--app-html-->', () => render(route))
}

for (const route of prerenderRoutes) {
  // Arquivos `rota.html` atendem URLs sem barra final na Vercel (cleanUrls) e no `vite preview`.
  const file = route === '/' ? join(dist, 'index.html') : join(dist, `${route.slice(1)}.html`)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, page(route))
}

await writeFile(join(dist, '404.html'), page('/404'))
await rm(ssrDir, { recursive: true, force: true })
console.log(`Pré-renderizadas ${prerenderRoutes.length} rotas e a página 404.`)
