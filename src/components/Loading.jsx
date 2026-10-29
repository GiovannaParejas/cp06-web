/** Skeleton de cards exibido enquanto os dados carregam. */
export default function Loading({ quantidade = 6 }) {
  return (
    <div role="status" aria-live="polite">
      <span className="sr-only">Carregando livros…</span>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: quantidade }).map((_, i) => (
          <div
            key={i}
            className=" overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900"
          >
            <div className="aspect-[4/3] bg-stone-200 dark:bg-stone-800" />
            <div className="space-y-3 p-5">
              <div className="h-5 w-2/3 rounded bg-stone-200 dark:bg-stone-800" />
              <div className="h-3 w-full rounded bg-stone-200 dark:bg-stone-800" />
              <div className="h-3 w-5/6 rounded bg-stone-200 dark:bg-stone-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
