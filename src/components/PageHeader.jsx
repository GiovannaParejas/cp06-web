export default function PageHeader({ eyebrow, titulo, children }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl">{titulo}</h1>
      {children && (
        <p className="mt-3 max-w-2xl text-base text-stone-600 dark:text-stone-400">{children}</p>
      )}
    </div>
  )
}
