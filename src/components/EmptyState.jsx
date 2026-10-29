export default function EmptyState({ icone = '🔍', titulo, children }) {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <p className="text-5xl">{icone}</p>
      <h2 className="mt-4 font-serif text-xl font-bold">{titulo}</h2>
      {children && <div className="mt-2 text-sm text-stone-600 dark:text-stone-400">{children}</div>}
    </div>
  )
}
