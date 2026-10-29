import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTema } from '../hooks/useTema.js'
import { useFavoritos } from '../hooks/useFavoritos.js'
import Favicon from '../assets/favicon.svg'

const LINKS = [
  { to: '/', label: 'Pesquisa', end: true },
  { to: '/lancamentos', label: 'Lançamentos' },
  { to: '/categorias', label: 'Categorias' },
  { to: '/favoritos', label: 'Favoritos' },
]

function classeLink({ isActive }) {
  return [
    'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
    isActive
      ? 'bg-stone-900 text-stone-50 dark:bg-amber-400 dark:text-stone-950'
      : 'text-stone-600 hover:bg-stone-200/70 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50',
  ].join(' ')
}

export default function Header() {
  const { tema, alternarTema } = useTema()
  const { favoritos } = useFavoritos()
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-stone-50/85 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMenuAberto(false)}>
          <img src={Favicon} alt="" className="h-8 w-8" />
          <span className="font-serif text-xl font-bold tracking-tight">
            Biblioteca <span className="text-amber-600 dark:text-amber-400">Front</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={classeLink}>
              {link.label}
              {link.to === '/favoritos' && favoritos.length > 0 && (
                <span className="ml-1.5 rounded-full bg-amber-500 px-1.5 text-xs text-stone-950">
                  {favoritos.length}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={alternarTema}
            aria-label={tema === 'escuro' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className="grid h-10 w-10 place-items-center rounded-full border border-stone-300 text-lg transition hover:rotate-12 hover:border-amber-500 dark:border-stone-700"
          >
            {tema === 'escuro' ? '☀️' : '🌙'}
          </button>

          <button
            type="button"
            onClick={() => setMenuAberto((a) => !a)}
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
            className="grid h-10 w-10 place-items-center rounded-full border border-stone-300 md:hidden dark:border-stone-700"
          >
            <span className="text-xl leading-none">{menuAberto ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {menuAberto && (
        <nav
          className=" flex flex-col gap-1 border-t border-stone-200 px-4 py-3 md:hidden dark:border-stone-800"
          aria-label="Principal (mobile)"
        >
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={classeLink}
              onClick={() => setMenuAberto(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
