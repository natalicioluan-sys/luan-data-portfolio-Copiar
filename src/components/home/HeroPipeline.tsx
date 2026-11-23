const scatter = [
  [8, 34], [18, 12], [27, 42], [36, 20], [44, 48], [53, 9], [61, 30], [70, 15], [79, 44], [88, 24], [14, 50], [66, 52],
]

function Dados() {
  return scatter.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" className="fill-muted" />)
}

function Informacao() {
  return [12, 24, 36, 48].map((y, row) => (
    <g key={y}>
      <rect x="8" y={y - 3} width="24" height="5" rx="1.5" className={row === 0 ? 'fill-soft' : 'fill-line'} />
      <rect x="38" y={y - 3} width="22" height="5" rx="1.5" className={row === 0 ? 'fill-soft' : 'fill-line'} />
      <rect x="66" y={y - 3} width="24" height="5" rx="1.5" className={row === 0 ? 'fill-soft' : 'fill-line'} />
    </g>
  ))
}

function Insight() {
  return (
    <>
      <path d="M6 50H92" className="stroke-line" strokeWidth="1" />
      <path d="M8 44 24 38 38 41 54 26 68 28 88 11" fill="none" className="stroke-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="88" cy="11" r="4" className="fill-accent stroke-surface" strokeWidth="2" />
    </>
  )
}

function Decisao() {
  return (
    <>
      <path d="M10 30H38M38 30 58 13H84M38 30 58 47H84" fill="none" className="stroke-line" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 30H38L58 13H84" fill="none" className="stroke-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="86" cy="13" r="4" className="fill-accent stroke-surface" strokeWidth="2" />
      <circle cx="86" cy="47" r="3" className="fill-muted" />
    </>
  )
}

const stages = [
  { label: 'Dados', view: <Dados /> },
  { label: 'Informação', view: <Informacao /> },
  { label: 'Insight', view: <Insight /> },
  { label: 'Decisão', view: <Decisao /> },
]

/** Representa o processo de análise. Não contém valores nem resultados. */
export function HeroPipeline() {
  return (
    <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line" aria-label="Etapas: dados, informação, insight e decisão">
      {stages.map((stage, index) => (
        <li key={stage.label} className="bg-surface p-4 sm:p-5">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-sm font-medium">{stage.label}</span>
            <span className="font-mono text-xs text-muted">0{index + 1}</span>
          </div>
          <svg viewBox="0 0 98 60" className="w-full" aria-hidden>
            {stage.view}
          </svg>
        </li>
      ))}
    </ol>
  )
}
