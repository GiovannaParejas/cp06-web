import { Link, useParams } from 'react-router-dom'
import { useLivros } from '../hooks/useLivros.js'
import { buscarCategoria } from '../data/categorias.js'
import PageHeader from '../components/PageHeader.jsx'
import BookGrid from '../components/BookGrid.jsx'
import Loading from '../components/Loading.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function CategoriaDetalhe() {
  const { slug } = useParams()
  const categoria = buscarCategoria(slug)
  const { livros, carregando, erro, recarregar } = useLivros()

  if (!categoria) {
    return (
      <EmptyState icone="🗂️" titulo="Categoria não encontrada">
        <Link to="/categorias" className="font-medium text-amber-600 underline dark:text-amber-400">
          Ver todas as categorias
        </Link>
      </EmptyState>
    )
  }

  const daCategoria = livros.filter((l) => l.categoria === slug)

  return (
    <section>
      <Link
        to="/categorias"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-stone-500 transition hover:-translate-x-1 hover:text-stone-900 dark:hover:text-stone-100"
      >
        ← Todas as categorias
      </Link>

      <PageHeader eyebrow={`${categoria.icone} Categoria`} titulo={categoria.nome}>
        {categoria.descricao}
      </PageHeader>

      {carregando && <Loading quantidade={3} />}
      {erro && <ErrorMessage erro={erro} onTentarNovamente={recarregar} />}

      {!carregando && !erro &&
        (daCategoria.length > 0 ? (
          <BookGrid livros={daCategoria} />
        ) : (
          <EmptyState icone="📭" titulo="Nenhum livro nesta categoria ainda" />
        ))}
    </section>
  )
}
