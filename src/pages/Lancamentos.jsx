import { useMemo, useState } from 'react'
import { useLivros } from '../hooks/useLivros.js'
import PageHeader from '../components/PageHeader.jsx'
import BookGrid from '../components/BookGrid.jsx'
import Loading from '../components/Loading.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'

const INICIAL = 5
const PASSO = 3

export default function Lancamentos() {
  const { livros, carregando, erro, recarregar } = useLivros()
  const [quantidade, setQuantidade] = useState(INICIAL)

  // Mais recentes primeiro: pelo `ano` quando existir; senão, pela ordem da API (id maior = mais novo)
  const ordenados = useMemo(
    () =>
      [...livros].sort((a, b) => {
        if (a.ano && b.ano && a.ano !== b.ano) return b.ano - a.ano
        return b.id - a.id
      }),
    [livros],
  )

  const visiveis = ordenados.slice(0, quantidade)
  const temMais = quantidade < ordenados.length

  return (
    <section>
      <PageHeader eyebrow="Acabaram de chegar" titulo="Últimos lançamentos">
        Os títulos mais recentes da estante. Os 5 primeiros recebem o selo de novidade.
      </PageHeader>

      {carregando && <Loading quantidade={INICIAL} />}
      {erro && <ErrorMessage erro={erro} onTentarNovamente={recarregar} />}

      {!carregando && !erro && (
        <>
          <BookGrid livros={visiveis} destacarPrimeiros={INICIAL} />

          <div className="mt-12 flex flex-col items-center gap-3">
            {temMais ? (
              <button
                type="button"
                onClick={() => setQuantidade((q) => q + PASSO)}
                className="rounded-full bg-stone-900 px-8 py-3 font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-stone-700 active:translate-y-0 dark:bg-amber-400 dark:text-stone-950 dark:hover:bg-amber-300"
              >
                Carregar mais livros
              </button>
            ) : (
              <p className="text-sm text-stone-500">Você chegou ao fim da estante 📚</p>
            )}
            <p className="text-xs text-stone-500">
              Mostrando {visiveis.length} de {ordenados.length}
            </p>
          </div>
        </>
      )}
    </section>
  )
}
