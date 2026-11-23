import { useState } from 'react'
import { ProjectCard } from '../components/projects/ProjectCard'
import { projectCategories, projects } from '../projects'
import type { ProjectCategory } from '../projects/types'

type Filter = ProjectCategory | 'Todos'

export function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('Todos')
  const visible = filter === 'Todos' ? projects : projects.filter((project) => project.category === filter)
  const filters: Filter[] = ['Todos', ...projectCategories]

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 font-mono text-xs text-accent">Portfólio</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Projetos</h1>
        <p className="mt-4 text-soft">
          Cada projeto mostra seu status atual. Resultados só aparecem aqui depois de produzidos com dados reais.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar por categoria">
        {filters.map((item) => {
          const count = item === 'Todos' ? projects.length : projects.filter((project) => project.category === item).length
          return (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={`min-h-10 rounded-md border px-3 py-1.5 text-sm transition-colors ${
                filter === item ? 'border-accent bg-accent text-on-accent' : 'border-line bg-surface text-soft hover:border-accent/60 hover:text-ink'
              }`}
            >
              {item} <span className="font-mono text-xs opacity-75">{count}</span>
            </button>
          )
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
