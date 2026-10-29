import { Link } from 'react-router-dom'
import { useLivros } from '../hooks/useLivros.js'
import { CATEGORIAS } from '../data/categorias.js'
import PageHeader from '../components/PageHeader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'

export default function Categorias() {
  const { livros, carregando, erro, recarregar } = useLivros()

  const contar = (slug) => livros.filter((l) => l.categoria === slug).length

  return (
    <section>
      <PageHeader eyebrow="Navegue por tema" titulo="Categorias">
        Escolha um assunto para ver todos os livros relacionados.
      </PageHeader>

      {erro && <ErrorMessage erro={erro} onTentarNovamente={recarregar} />}

      {!erro && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIAS.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/categorias/${cat.slug}`}
              style={{ animationDelay: `${i * 70}ms` }}
              className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/30 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-500"
            >
              <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-100 transition-transform duration-500 group-hover:scale-[2.2] dark:bg-amber-500/10" />
              <div className="relative">
                <span className="text-4xl">{cat.icone}</span>
                <h2 className="mt-4 font-serif text-2xl font-bold">{cat.nome}</h2>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{cat.descricao}</p>
                <p className="mt-5 flex items-center justify-between text-sm font-medium">
                  <span className="text-stone-500">
                    {carregando ? '…' : `${contar(cat.slug)} ${contar(cat.slug) === 1 ? 'livro' : 'livros'}`}
                  </span>
                  <span className="text-amber-600 transition-transform group-hover:translate-x-1 dark:text-amber-400">
                    Ver livros 
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
