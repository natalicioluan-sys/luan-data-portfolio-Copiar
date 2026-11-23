import type { IllustrationKind } from '../../projects/types'

const line = { fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' } as const

const art: Record<IllustrationKind, React.ReactNode> = {
  sales: [34, 62, 48, 88, 72, 112, 96].map((height, index) => (
    <rect
      key={index}
      x={38 + index * 36}
      y={138 - height}
      width="20"
      height={height}
      rx="3"
      className={index === 5 ? 'fill-accent' : 'fill-line'}
    />
  )),
  exchange: (
    <>
      <path d="M24 104C62 96 78 118 112 92s56-10 88-26 58-14 96-34" {...line} className="stroke-accent" strokeWidth="2.5" />
      <path d="M24 72c38 12 60-8 94 8s54 26 88 14 52 2 90 12" {...line} className="stroke-muted" strokeWidth="2" />
      <path d="M24 126c44-10 72 2 112-6s70-2 160-16" {...line} className="stroke-line" strokeWidth="2" />
    </>
  ),
  trading: (
    <>
      <path d="M24 122h48v-22h34v14h36V82h28v18h40V54h38v14h48V30" {...line} className="stroke-accent" strokeWidth="2.5" />
      <path d="M24 142H296" className="stroke-line" strokeWidth="1.5" />
    </>
  ),
  customers: (
    <>
      {[[70, 58], [92, 44], [104, 72], [58, 86], [84, 92]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="7" className="fill-muted" />)}
      {[[162, 104], [184, 118], [198, 92], [150, 128], [176, 88]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="7" className="fill-line" />)}
      {[[240, 42], [262, 58], [226, 64], [254, 30], [274, 36]].map(([cx, cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="7" className="fill-accent" />)}
    </>
  ),
}

export function ProjectIllustration({ kind }: { kind: IllustrationKind }) {
  return (
    <svg viewBox="0 0 320 160" className="block w-full bg-raised/50" aria-hidden>
      {art[kind]}
    </svg>
  )
}
