import { ArrowRight, ExternalLink, FolderGit2 } from 'lucide-react'
import type { Project } from '../../projects/types'
import { ButtonLink } from '../ui/ButtonLink'
import { StatusBadge } from '../ui/StatusBadge'
import { ProjectIllustration } from './ProjectIllustration'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/60">
      <ProjectIllustration kind={project.illustration} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs text-muted">
            {project.number} · {project.category}
          </span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-2 text-sm text-soft">{project.summary}</p>
        <p className="mt-4 border-l-2 border-line pl-3 text-sm text-soft">
          <span className="font-medium text-ink">Problema: </span>
          {project.problem}
        </p>
        <ul className="mb-6 mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologias">
          {project.technologies.map((technology) => (
            <li key={technology} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-soft">
              {technology}
            </li>
          ))}
        </ul>
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
