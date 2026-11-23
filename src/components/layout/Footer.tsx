import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <span>{profile.name} · Ciência de Dados</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  )
}
