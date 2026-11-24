import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import mark from '../../assets/mark.svg'
import { profile } from '../../data/profile'
import { ThemeToggle } from '../ui/ThemeToggle'

const navigation = [
  { label: 'Sobre', to: '/#sobre' },
  { label: 'Trajetória', to: '/#trajetoria' },
  { label: 'Habilidades', to: '/#habilidades' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Contato', to: '/#contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.key])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src={mark} alt="" width={20} height={20} />
          {profile.name}
          <span className="hidden font-mono text-xs font-normal text-muted sm:inline">/ data</span>
        </Link>

        <div className="flex items-center gap-1">
          <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm text-soft transition-colors hover:bg-raised hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="grid size-10 place-items-center rounded-md text-soft hover:bg-raised hover:text-ink md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu móvel" className="border-t border-line bg-canvas px-5 py-3 md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 text-soft hover:bg-raised hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
