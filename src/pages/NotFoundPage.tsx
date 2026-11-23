import { ButtonLink } from '../components/ui/ButtonLink'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="mb-2 font-mono text-sm text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">Página não encontrada</h1>
      <p className="mb-6 mt-3 text-soft">O endereço pode ter mudado ou não existir.</p>
      <ButtonLink to="/" variant="primary">
        Voltar ao início
      </ButtonLink>
    </div>
  )
}
