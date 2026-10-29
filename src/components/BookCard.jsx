import { useFavoritos } from '../hooks/useFavoritos.js'

/**
 * Card de livro. `destaque` adiciona o selo "Novo lançamento".
 * `indice` é usado para escalonar a animação de entrada.
 */
export default function BookCard({ livro, destaque = false, indice = 0 }) {
  const { ehFavorito, alternarFavorito } = useFavoritos()
  const favorito = ehFavorito(livro.id)

  return (
    <article
      className={[
        'group relative flex flex-col overflow-hidden rounded-2xl border bg-white',
        'transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl',
        'dark:bg-stone-900',
        destaque
          ? 'border-amber-400 shadow-md shadow-amber-200/60 hover:shadow-amber-300/60 dark:border-amber-500/70 dark:shadow-amber-900/30'
          : 'border-stone-200 hover:shadow-stone-300/60 dark:border-stone-800 dark:hover:shadow-black/40',
      ].join(' ')}
    >
      {destaque && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone-950 shadow">
          ✦ Novo lançamento
        </span>
      )}

      <button
        type="button"
        onClick={() => alternarFavorito(livro.id)}
        aria-pressed={favorito}
        aria-label={favorito ? `Remover ${livro.titulo} dos favoritos` : `Favoritar ${livro.titulo}`}
        className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-lg shadow transition hover:scale-110 active:scale-95 dark:bg-stone-800/90"
      >
        <span className={favorito ? 'text-rose-500' : 'text-stone-400'}>{favorito ? '♥' : '♡'}</span>
      </button>

      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 p-6 dark:from-stone-800 dark:to-stone-900">
        <img
          src={livro.imagem}
          alt={`Capa do livro ${livro.titulo}`}
          loading="lazy"
          className="h-full w-auto rounded-sm object-contain shadow-lg transition-transform duration-500"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-serif text-lg font-bold leading-snug">{livro.titulo}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          {livro.descricao}
        </p>
      </div>
    </article>
  )
}
