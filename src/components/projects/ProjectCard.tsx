import { ArrowRight, ExternalLink, FolderGit2 } from 'lucide-react'
import type { Project } from '../../projects/types'
import { ButtonLink } from '../ui/ButtonLink'
import { StatusBadge } from '../ui/StatusBadge'
import { ProjectIllustration } from './ProjectIllustration'

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.images.find((image) => image.device !== 'mobile')
  const usesPlanned = project.technologies.used.length === 0
  const technologies = usesPlanned ? project.technologies.planned : project.technologies.used
  const visible = technologies.slice(0, 6)

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/60">
      <div className="aspect-[2/1] overflow-hidden border-b border-line bg-raised">
        {cover ? (
          <img
            src={project.cardImage ?? cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.015]"
          />
        ) : (
          <ProjectIllustration kind={project.illustration} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs text-muted">
            {project.number} · {project.category}
          </span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
        <p className="text-sm font-medium text-soft">{project.subtitle}</p>
        <p className="mt-3 text-sm text-soft">{project.summary}</p>
        <p className="mt-4 border-l-2 border-line pl-3 text-sm text-soft">
          <span className="font-medium text-ink">Problema: </span>
          {project.problem}
        </p>
        <div className="mb-6 mt-4">
          <p className="mb-1.5 text-xs text-muted">{usesPlanned ? 'Tecnologias previstas' : 'Tecnologias utilizadas'}</p>
          <ul className="flex flex-wrap gap-1.5">
            {visible.map((technology) => (
              <li key={technology} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-soft">
                {technology}
              </li>
            ))}
            {technologies.length > visible.length && (
              <li className="px-1 py-0.5 font-mono text-xs text-muted">+{technologies.length - visible.length}</li>
            )}
          </ul>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-2">
          <ButtonLink to={`/projetos/${project.slug}`} variant="primary">
            Ver projeto <ArrowRight size={16} aria-hidden />
          </ButtonLink>
          {project.links.github && (
            <ButtonLink href={project.links.github} variant="ghost">
              <FolderGit2 size={16} aria-hidden /> GitHub
            </ButtonLink>
          )}
          {project.links.demo && (
            <ButtonLink href={project.links.demo} variant="ghost">
              <ExternalLink size={16} aria-hidden /> Demonstração
            </ButtonLink>
          )}
        </div>
      </div>
    </article>
  )
}
