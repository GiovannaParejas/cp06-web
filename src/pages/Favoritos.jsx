import { Link } from 'react-router-dom'
import { useLivros } from '../hooks/useLivros.js'
import { useFavoritos } from '../hooks/useFavoritos.js'
import PageHeader from '../components/PageHeader.jsx'
import BookGrid from '../components/BookGrid.jsx'
import Loading from '../components/Loading.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function Favoritos() {
  const { livros, carregando, erro, recarregar } = useLivros()
  const { favoritos } = useFavoritos()

  const meusLivros = livros.filter((l) => favoritos.includes(l.id))

  return (
    <section>
      <PageHeader eyebrow="Sua estante" titulo="Favoritos">
        Livros que você marcou com ♥. Eles ficam salvos neste navegador.
      </PageHeader>

      {carregando && <Loading quantidade={3} />}
      {erro && <ErrorMessage erro={erro} onTentarNovamente={recarregar} />}

      {!carregando && !erro &&
        (meusLivros.length > 0 ? (
          <BookGrid livros={meusLivros} />
        ) : (
          <EmptyState icone="♡" titulo="Nenhum favorito ainda">
            Toque no coração de um livro para guardá-lo aqui.{' '}
            <Link to="/" className="font-medium text-amber-600 underline dark:text-amber-400">
              Explorar o acervo
            </Link>
          </EmptyState>
        ))}
    </section>
  )
}
