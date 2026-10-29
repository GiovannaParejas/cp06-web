export default function Pagination({ pagina, totalPaginas, onMudar }) {
  if (totalPaginas <= 1) return null

  const base =
    'grid h-10 min-w-10 place-items-center rounded-full px-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-40'

  return (
    <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Paginação">
      <button
        type="button"
        onClick={() => onMudar(pagina - 1)}
        disabled={pagina === 1}
        className={`${base} border border-stone-300 hover:border-amber-500 dark:border-stone-700`}
      >
        ← Anterior
      </button>

      {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onMudar(n)}
          aria-current={n === pagina ? 'page' : undefined}
          className={`${base} ${
            n === pagina
              ? 'bg-stone-900 text-white dark:bg-amber-400 dark:text-stone-950'
              : 'hover:bg-stone-200 dark:hover:bg-stone-800'
          }`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onMudar(pagina + 1)}
        disabled={pagina === totalPaginas}
        className={`${base} border border-stone-300 hover:border-amber-500 dark:border-stone-700`}
      >
        Próxima →
      </button>
    </nav>
  )
}
