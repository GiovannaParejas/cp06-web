export default function SearchBar({ valor, onChange }) {
  return (
    <div className="relative">
      <label htmlFor="busca" className="sr-only">
        Buscar livro pelo título
      </label>
      <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-stone-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </span>
      <input
        id="busca"
        type="search"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por título — ex.: JavaScript, CSS, Design…"
        className="w-full rounded-full border border-stone-300 bg-white py-4 pl-14 pr-5 text-base shadow-sm outline-none transition placeholder:text-stone-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 dark:border-stone-700 dark:bg-stone-900"
      />
    </div>
  )
}
