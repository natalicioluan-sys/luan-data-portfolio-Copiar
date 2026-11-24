import { ArrowLeft, ExternalLink, Info } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { CaseBlocks } from '../components/projects/CaseBlocks'
import { ProjectIllustration } from '../components/projects/ProjectIllustration'
import { ButtonLink } from '../components/ui/ButtonLink'
import { StatusBadge } from '../components/ui/StatusBadge'
import { getProject } from '../projects'
import { NotFoundPage } from './NotFoundPage'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  if (!project) return <NotFoundPage />

  const cover = project.images.find((image) => image.device !== 'mobile')

  return (
    <article className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <Link to="/projetos" className="mb-8 inline-flex min-h-10 items-center gap-2 text-sm text-soft hover:text-ink">
        <ArrowLeft size={16} aria-hidden /> Todos os projetos
      </Link>

      <header className="mb-12 grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono text-xs text-muted">
              {project.number} · {project.category}
            </span>
            <StatusBadge status={project.status} />
            <span className="rounded border border-line px-2 py-0.5 text-xs text-soft">{project.context}</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{project.name}</h1>
          <p className="mt-2 text-lg font-medium text-soft">{project.subtitle}</p>
          <p className="mt-4 max-w-xl text-soft">{project.summary}</p>
          {project.statusNote && (
            <p className="mt-5 flex max-w-xl items-start gap-2 rounded-md border border-line bg-surface px-3 py-2.5 text-sm text-soft">
              <Info size={15} className="mt-1 shrink-0 text-accent" aria-hidden />
              <span>{project.statusNote}</span>
            </p>
          )}
          {project.links.demo && (
            <div className="mt-6">
              <ButtonLink href={project.links.demo} variant="primary">
                <ExternalLink size={16} aria-hidden /> Ver demonstração
              </ButtonLink>
            </div>
          )}
        </div>
        <div className="overflow-hidden rounded-lg border border-line bg-raised">
          {cover ? (
            <img src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} decoding="async" className="block h-auto w-full" />
          ) : (
            <ProjectIllustration kind={project.illustration} />
          )}
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[13rem_1fr] lg:gap-14">
        <nav aria-label="Seções do estudo de caso" className="hidden lg:block">
          <ol className="sticky top-24 space-y-1 border-l border-line">
            {project.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="-ml-px block border-l border-transparent py-1 pl-3 text-xs text-muted transition-colors hover:border-accent hover:text-ink">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="min-w-0 divide-y divide-line">
          {project.sections.map((section, index) => (
            <section key={section.id} id={section.id} className="py-8 first:pt-0">
              <h2 className="mb-4 flex items-baseline gap-3 text-xl font-semibold tracking-tight">
                <span className="font-mono text-xs font-normal text-accent">{String(index + 1).padStart(2, '0')}</span>
                {section.title}
              </h2>
              <CaseBlocks blocks={section.blocks} project={project} />
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
