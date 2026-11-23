import { Moon, Sun } from 'lucide-react'

function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
  document.documentElement.dataset.theme = next
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'light' ? '#F6F7F9' : '#0E1116')
  try {
    localStorage.setItem('theme', next)
  } catch {
    // Sem armazenamento, o tema vale apenas para esta visita.
  }
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema claro e escuro"
      className="grid size-10 place-items-center rounded-md text-soft transition-colors hover:bg-raised hover:text-ink"
    >
      <Sun size={18} className="in-data-[theme=light]:hidden" />
      <Moon size={18} className="hidden in-data-[theme=light]:block" />
    </button>
  )
}
