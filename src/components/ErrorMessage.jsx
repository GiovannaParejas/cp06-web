export default function ErrorMessage({ erro, onTentarNovamente }) {
  return (
    <div
      role="alert"
      className="animate-fade-up mx-auto max-w-md rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center dark:border-rose-900/60 dark:bg-rose-950/40"
    >
      <p className="text-4xl">📕</p>
      <h2 className="mt-3 font-serif text-xl font-bold">Não conseguimos abrir a estante</h2>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
        Verifique sua conexão com a internet e tente de novo.
      </p>
      {erro?.message && (
        <p className="mt-2 text-xs text-stone-500 dark:text-stone-500">Detalhe: {erro.message}</p>
      )}
      {onTentarNovamente && (
        <button
          type="button"
          onClick={onTentarNovamente}
          className="mt-5 rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-stone-700 dark:bg-amber-400 dark:text-stone-950 dark:hover:bg-amber-300"
        >
          Tentar novamente
        </button>
      )}
    </div>
  )
}
