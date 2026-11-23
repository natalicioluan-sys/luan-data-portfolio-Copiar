import { FlaskConical } from 'lucide-react'
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import type { ChartPoint, ChartSpec } from '../../projects/types'

const format = (value: number) => value.toLocaleString('pt-BR')

function niceStep(range: number) {
  const raw = Math.max(range, 1) / 3
  const power = 10 ** Math.floor(Math.log10(raw))
  const ratio = raw / power
  return (ratio <= 1 ? 1 : ratio <= 2 ? 2 : ratio <= 5 ? 5 : 10) * power
}

interface ViewProps {
  points: ChartPoint[]
  active: number
  onActive: (index: number) => void
  title: string
}

function BarView({ points, active, onActive }: ViewProps) {
  const max = Math.max(...points.map((point) => point.value))
  return (
    <div className="space-y-1">
      {points.map((point, index) => (
        <button
          key={point.label}
          type="button"
          onPointerEnter={() => onActive(index)}
          onFocus={() => onActive(index)}
          onClick={() => onActive(index)}
          aria-label={`${point.label}: ${format(point.value)}`}
          className={`grid w-full grid-cols-[6.5rem_1fr] items-center gap-3 rounded px-1 py-1.5 text-left sm:grid-cols-[8rem_1fr] ${index === active ? 'bg-raised' : ''}`}
        >
          <span className="truncate text-xs text-soft">{point.label}</span>
          <span className="block h-4">
            <span
              className={`block h-full rounded-r transition-opacity ${index === active ? 'bg-accent' : 'bg-accent opacity-45'}`}
              style={{ width: `${(point.value / max) * 100}%` }}
            />
          </span>
        </button>
      ))}
    </div>
  )
}

function LineView({ points, active, onActive, title }: ViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(640)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new ResizeObserver(([entry]) => setWidth(Math.max(entry.contentRect.width, 240)))
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const height = 250
  const margin = { top: 14, right: 12, bottom: 28, left: 40 }
  const values = points.map((point) => point.value)
  const step = niceStep(Math.max(...values) - Math.min(...values))
  const low = Math.floor(Math.min(...values) / step) * step
  const high = Math.ceil(Math.max(...values) / step) * step
  const ticks = Array.from({ length: Math.round((high - low) / step) + 1 }, (_, index) => low + index * step)
  const plotWidth = width - margin.left - margin.right
  const x = (index: number) => margin.left + (index / (points.length - 1)) * plotWidth
  const y = (value: number) => height - margin.bottom - ((value - low) / (high - low || 1)) * (height - margin.top - margin.bottom)
  const path = points.map((point, index) => `${index ? 'L' : 'M'}${x(index).toFixed(1)} ${y(point.value).toFixed(1)}`).join(' ')
  const xLabels = [0, Math.floor((points.length - 1) / 2), points.length - 1]

  function handlePointer(event: PointerEvent<SVGSVGElement>) {
    const box = event.currentTarget.getBoundingClientRect()
    const ratio = (event.clientX - box.left - margin.left) / plotWidth
    onActive(Math.min(points.length - 1, Math.max(0, Math.round(ratio * (points.length - 1)))))
  }

  function handleKey(event: KeyboardEvent<SVGSVGElement>) {
    if (event.key === 'ArrowLeft') onActive(Math.max(0, active - 1))
    if (event.key === 'ArrowRight') onActive(Math.min(points.length - 1, active + 1))
  }

  return (
    <div ref={ref}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`${title}. Use as setas para navegar pelos pontos.`}
        tabIndex={0}
        onPointerMove={handlePointer}
        onPointerDown={handlePointer}
        onKeyDown={handleKey}
        className="block max-w-full touch-pan-y"
      >
        {ticks.map((tick) => (
          <g key={tick}>
            <line x1={margin.left} x2={width - margin.right} y1={y(tick)} y2={y(tick)} className="stroke-line" strokeWidth="1" />
            <text x={margin.left - 8} y={y(tick) + 4} textAnchor="end" className="fill-muted font-mono text-[11px]">
              {format(tick)}
            </text>
          </g>
        ))}
        {[...new Set(xLabels)].map((index) => (
          <text
            key={index}
            x={x(index)}
            y={height - 8}
            textAnchor={index === 0 ? 'start' : index === points.length - 1 ? 'end' : 'middle'}
            className="fill-muted text-[11px]"
          >
            {points[index].label}
          </text>
        ))}
        <line x1={x(active)} x2={x(active)} y1={margin.top} y2={height - margin.bottom} className="stroke-muted" strokeWidth="1" strokeDasharray="3 3" />
        <path d={path} fill="none" className="stroke-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={x(active)} cy={y(points[active].value)} r="5" className="fill-accent stroke-surface" strokeWidth="2" />
      </svg>
    </div>
  )
}

export function DataChart({ spec }: { spec: ChartSpec }) {
  const [active, setActive] = useState(spec.kind === 'line' ? spec.points.length - 1 : 0)
  const current = spec.points[active]
  const View = spec.kind === 'bar' ? BarView : LineView

  return (
    <figure className="rounded-lg border border-line bg-surface p-4 sm:p-5">
      {spec.source === 'demo' && (
        <p className="mb-4 flex items-start gap-2 rounded border border-line bg-raised px-3 py-2 text-xs text-soft">
          <FlaskConical size={14} className="mt-0.5 shrink-0" aria-hidden />
          <span>
            <strong className="font-medium text-ink">Dados demonstrativos.</strong> Valores fictícios, usados apenas para mostrar o formato. Não são resultados do projeto.
          </span>
        </p>
      )}
      <figcaption className="mb-3 text-sm font-medium">{spec.title}</figcaption>
      <p className="mb-3 flex flex-wrap items-baseline gap-x-2 text-xs text-muted" aria-live="polite">
        <span>{current.label}</span>
        <span className="font-mono text-base font-medium text-ink">{format(current.value)}</span>
        <span>{spec.measure}</span>
      </p>
      <View points={spec.points} active={active} onActive={setActive} title={spec.title} />
      <details className="mt-3 text-sm">
        <summary className="cursor-pointer text-xs text-soft hover:text-ink">Ver dados em tabela</summary>
        <div className="mt-2 max-h-56 overflow-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-muted">
              <tr className="border-b border-line">
                <th scope="col" className="py-1.5 font-medium">Item</th>
                <th scope="col" className="py-1.5 text-right font-medium">{spec.measure}</th>
              </tr>
            </thead>
            <tbody>
              {spec.points.map((point) => (
                <tr key={point.label} className="border-b border-line/60 text-soft">
                  <td className="py-1.5">{point.label}</td>
                  <td className="py-1.5 text-right font-mono">{format(point.value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
  )
}
