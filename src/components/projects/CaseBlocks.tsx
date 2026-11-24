import { CheckCircle2, CircleDashed, Clock3, FolderGit2, Info, Lightbulb, Target } from 'lucide-react'
import type { CaseBlock, Project } from '../../projects/types'
import { DataChart } from '../charts/DataChart'
import { ButtonLink } from '../ui/ButtonLink'

const listIcons = {
  implemented: { icon: CheckCircle2, className: 'text-good' },
  planned: { icon: CircleDashed, className: 'text-muted' },
  objective: { icon: Target, className: 'text-muted' },
  learning: { icon: Lightbulb, className: 'text-accent' },
}

function TechList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-2 text-xs font-medium text-muted">{title}</h3>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li key={item} className="rounded border border-line px-2 py-1 font-mono text-xs text-soft">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Gallery({ project }: { project: Project }) {
  if (!project.images.length) return <Pending />
  const screens = project.images.filter((image) => image.device !== 'mobile')
  const phones = project.images.filter((image) => image.device === 'mobile')

  return (
    <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
      <div className="min-w-0 space-y-5">
        {screens.map((image) => (
          <figure key={image.src}>
            <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Abrir imagem: ${image.caption}`} className="block overflow-hidden rounded-lg border border-line transition-colors hover:border-accent/60">
              <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" className="block h-auto w-full" />
            </a>
            <figcaption className="mt-2 text-xs text-muted">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      {phones.map((image) => (
        <figure key={image.src} className="w-full max-w-52 justify-self-center">
          <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Abrir imagem: ${image.caption}`} className="block overflow-hidden rounded-lg border border-line transition-colors hover:border-accent/60">
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" className="block h-auto w-full" />
          </a>
          <figcaption className="mt-2 text-xs text-muted">{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

function Pending() {
  return (
    <p className="flex items-center gap-2 rounded-md border border-dashed border-line px-4 py-3 text-sm text-muted">
      <Clock3 size={15} className="shrink-0" aria-hidden />
      Etapa ainda não documentada. Será publicada quando houver conteúdo real.
    </p>
  )
}

function Block({ block, project }: { block: CaseBlock; project: Project }) {
  switch (block.type) {
    case 'text':
      return (
        <div className="max-w-3xl space-y-3 text-soft">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )
    case 'list': {
      const { icon: Icon, className } = listIcons[block.tone]
      return (
        <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-soft">
              <Icon size={16} className={`mt-0.5 shrink-0 ${className}`} aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      )
    }
    case 'architecture':
      return (
        <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {block.steps.map((step, index) => (
            <li key={step.title} className="bg-surface p-4">
              <span className="mb-2 block font-mono text-xs text-accent">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="text-sm font-semibold">{step.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-soft">{step.detail}</p>
            </li>
          ))}
        </ol>
      )
    case 'notice':
      return (
        <p className="flex items-start gap-2 rounded-md border border-line bg-raised px-4 py-3 text-sm text-soft">
          <Info size={15} className="mt-1 shrink-0 text-accent" aria-hidden />
          <span>{block.text}</span>
        </p>
      )
    case 'technologies':
      return (
        <div className="space-y-4">
          {project.technologies.used.length > 0 && <TechList title="Já utilizadas no código" items={project.technologies.used} />}
          {project.technologies.planned.length > 0 && <TechList title="Planejadas" items={project.technologies.planned} />}
        </div>
      )
    case 'gallery':
      return <Gallery project={project} />
    case 'charts':
      return (
        <div className="space-y-4">
          {block.charts.map((chart) => (
            <DataChart key={chart.title} spec={chart} />
          ))}
        </div>
      )
    case 'repository':
      return project.links.github ? (
        <ButtonLink href={project.links.github}>
          <FolderGit2 size={16} aria-hidden /> Abrir repositório
        </ButtonLink>
      ) : (
        <p className="text-sm text-muted">Repositório ainda não publicado.</p>
      )
    case 'pending':
      return <Pending />
  }
}

export function CaseBlocks({ blocks, project }: { blocks: CaseBlock[]; project: Project }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => (
        <Block key={`${block.type}-${index}`} block={block} project={project} />
      ))}
    </div>
  )
}
