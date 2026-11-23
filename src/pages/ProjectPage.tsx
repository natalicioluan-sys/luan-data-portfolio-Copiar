import { ArrowLeft, Clock3, ExternalLink, FolderGit2, Target } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router'
import { DataChart } from '../components/charts/DataChart'
import { ProjectIllustration } from '../components/projects/ProjectIllustration'
import { ButtonLink } from '../components/ui/ButtonLink'
import { StatusBadge } from '../components/ui/StatusBadge'
import { getProject } from '../projects'
import type { CaseContent } from '../projects/types'
import { NotFoundPage } from './NotFoundPage'

function Pending() {
  return (
    <p className="flex items-center gap-2 rounded-md border border-dashed border-line px-4 py-3 text-sm text-muted">
      <Clock3 size={15} className="shrink-0" aria-hidden />
      Etapa ainda não documentada. Será publicada quando houver conteúdo real.
    </p>
  )
}

function Text({ content }: { content: CaseContent }) {
  if (!content) return <Pending />
  return (
    <div className="space-y-3 text-soft">
      {content.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  if (!project) return <NotFoundPage />

  const { caseStudy: study, links } = project
  const sections: { id: string; title: string; body: ReactNode }[] = [
    { id: 'visao-geral', title: 'Visão geral', body: <Text content={study.overview} /> },
    { id: 'problema', title: 'Problema de negócio', body: <Text content={study.businessProblem} /> },
    {
      id: 'objetivos',
      title: 'Objetivos',
      body: (
        <ul className="grid gap-2 sm:grid-cols-2">
          {project.objectives.map((objective) => (
            <li key={objective} className="flex gap-2 text-sm text-soft">
              <Target size={16} className="mt-0.5 shrink-0 text-muted" aria-hidden />
              {objective}
            </li>
          ))}
        </ul>
      ),
    },
    { id: 'dados', title: 'Origem dos dados', body: <Text content={study.dataSources} /> },
    {
      id: 'tecnologias',
      title: 'Tecnologias utilizadas',
      body: (
        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <li key={technology} className="rounded border border-line px-2 py-1 font-mono text-xs text-soft">
              {technology}
            </li>
          ))}
        </ul>
      ),
    },
    { id: 'tratamento', title: 'Processo de tratamento dos dados', body: <Text content={study.dataProcessing} /> },
    { id: 'exploratoria', title: 'Análise exploratória', body: <Text content={study.exploratoryAnalysis} /> },
    {
      id: 'visualizacoes',
      title: 'Visualizações',
      body: study.visualizations.length ? (
        <div className="space-y-4">
          {study.visualizations.map((chart) => (
            <DataChart key={chart.title} spec={chart} />
          ))}
        </div>
      ) : (
        <Pending />
      ),
    },
    { id: 'descobertas', title: 'Principais descobertas', body: <Text content={study.findings} /> },
    { id: 'conclusoes', title: 'Conclusões', body: <Text content={study.conclusions} /> },
    {
      id: 'repositorio',
      title: 'Repositório GitHub',
      body: links.github ? (
        <ButtonLink href={links.github}>
          <FolderGit2 size={16} aria-hidden /> Abrir repositório
        </ButtonLink>
      ) : (
        <p className="text-sm text-muted">Repositório ainda não publicado.</p>
      ),
    },
  ]

  return (
    <article className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <Link to="/projetos" className="mb-8 inline-flex min-h-10 items-center gap-2 text-sm text-soft hover:text-ink">
        <ArrowLeft size={16} aria-hidden /> Todos os projetos
      </Link>

      <header className="mb-12 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-muted">
              {project.number} · {project.category}
            </span>
            <StatusBadge status={project.status} />
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-xl text-lg text-soft">{project.summary}</p>
          {links.demo && (
            <div className="mt-6">
              <ButtonLink href={links.demo} variant="primary">
                <ExternalLink size={16} aria-hidden /> Ver demonstração
              </ButtonLink>
            </div>
          )}
        </div>
        <div className="overflow-hidden rounded-lg border border-line">
          <ProjectIllustration kind={project.illustration} />
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[13rem_1fr] lg:gap-14">
        <nav aria-label="Seções do estudo de caso" className="hidden lg:block">
          <ol className="sticky top-24 space-y-1 border-l border-line">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="-ml-px block border-l border-transparent py-1 pl-3 text-xs text-muted transition-colors hover:border-accent hover:text-ink">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="min-w-0 divide-y divide-line">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="py-8 first:pt-0">
              <h2 className="mb-4 flex items-baseline gap-3 text-xl font-semibold tracking-tight">
                <span className="font-mono text-xs font-normal text-accent">{String(index + 1).padStart(2, '0')}</span>
                {section.title}
              </h2>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
