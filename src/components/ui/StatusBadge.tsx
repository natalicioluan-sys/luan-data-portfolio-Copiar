import { CheckCircle2, Circle, CircleDot } from 'lucide-react'
import type { ProjectStatus } from '../../projects/types'

const styles = {
  Concluído: { icon: CheckCircle2, className: 'text-good' },
  'Em desenvolvimento': { icon: CircleDot, className: 'text-accent' },
  Planejado: { icon: Circle, className: 'text-muted' },
} satisfies Record<ProjectStatus, { icon: typeof Circle; className: string }>

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { icon: Icon, className } = styles[status]
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-soft">
      <Icon size={14} className={className} aria-hidden />
      {status}
    </span>
  )
}
