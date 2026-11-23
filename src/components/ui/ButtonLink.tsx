import type { ReactNode } from 'react'
import { Link } from 'react-router'

interface ButtonLinkProps {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

const base =
  'inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors'
const variants = {
  primary: 'bg-accent text-on-accent hover:opacity-90',
  secondary: 'border border-line bg-surface text-ink hover:border-accent',
  ghost: 'text-soft hover:bg-raised hover:text-ink',
}

export function ButtonLink({ to, href, variant = 'secondary', children }: ButtonLinkProps) {
  const className = `${base} ${variants[variant]}`
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }
  const external = href?.startsWith('http')
  return (
    <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  )
}
