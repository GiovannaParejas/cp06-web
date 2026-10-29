import { useEffect, useMemo, useState } from 'react'
import { useLivros } from '../hooks/useLivros.js'
import PageHeader from '../components/PageHeader.jsx'
import SearchBar from '../components/SearchBar.jsx'
import BookGrid from '../components/BookGrid.jsx'
import Loading from '../components/Loading.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Pagination from '../components/Pagination.jsx'

const POR_PAGINA = 6

// Remove acentos e caixa para a busca não depender de "ç", "ê" etc.
const normalizar = (texto) =>
  texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

export default function Pesquisa() {
  const { livros, carregando, erro, recarregar } = useLivros()
  const [busca, setBusca] = useState('')
  const [pagina, setPagina] = useState(1)

  const filtrados = useMemo(() => {
    const termo = normalizar(busca)
    if (!termo) return livros
    return livros.filter((l) => normalizar(l.titulo).includes(termo))
  }, [livros, busca])

  // Sempre volta para a página 1 quando o termo muda
  useEffect(() => setPagina(1), [busca])

  const totalPaginas = Math.ceil(filtrados.length / POR_PAGINA)
  const visiveis = filtrados.slice((pagina - 1) * POR_PAGINA, pagina * POR_PAGINA)

  const mudarPagina = (n) => {
    setPagina(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section>
      <PageHeader eyebrow="Acervo" titulo="Encontre seu próximo livro">
        Uma estante com os melhores títulos de Front-end - HTML, CSS, JavaScript, UX e muito mais.
      </PageHeader>

      <div className="mb-8">
        <SearchBar valor={busca} onChange={setBusca} />
        {!carregando && !erro && (
          <p className="mt-3 pl-5 text-sm text-stone-500" aria-live="polite">
            {filtrados.length} {filtrados.length === 1 ? 'livro encontrado' : 'livros encontrados'}
          </p>
        )}
      </div>

      {carregando && <Loading />}
      {erro && <ErrorMessage erro={erro} onTentarNovamente={recarregar} />}

      {!carregando && !erro && filtrados.length === 0 && (
        <EmptyState titulo="Nenhum livro com esse título">
          Tente outro termo, como “CSS” ou “JavaScript”.
        </EmptyState>
      )}

      {!carregando && !erro && visiveis.length > 0 && (
        <>
          {/* key com a página reinicia a animação dos cards ao paginar */}
          <div key={`${pagina}-${busca}`}>
            <BookGrid livros={visiveis} />
          </div>
          <Pagination pagina={pagina} totalPaginas={totalPaginas} onMudar={mudarPagina} />
        </>
      )}
    </section>
  )
}
