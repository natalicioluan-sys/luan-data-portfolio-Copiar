import type { ReactNode } from 'react'

export function SectionHeading({ index, title, children }: { index: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 font-mono text-xs text-accent">{index}</p>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {children && <p className="mt-3 text-soft">{children}</p>}
    </div>
  )
}
