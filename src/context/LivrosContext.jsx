import { createContext, useCallback, useEffect, useState } from 'react'
import { buscarLivros } from '../services/api.js'

export const LivrosContext = createContext(null)

/**
 * Carrega os livros uma única vez e compartilha com todas as páginas,
 * evitando uma nova requisição a cada troca de rota.
 */
export function LivrosProvider({ children }) {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)
  const [tentativa, setTentativa] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    setCarregando(true)
    setErro(null)

    buscarLivros(controller.signal)
      .then(setLivros)
      .catch((e) => {
        if (e.name !== 'AbortError') setErro(e)
      })
      .finally(() => {
        if (!controller.signal.aborted) setCarregando(false)
      })

    return () => controller.abort()
  }, [tentativa])

  const recarregar = useCallback(() => setTentativa((t) => t + 1), [])

  return (
    <LivrosContext.Provider value={{ livros, carregando, erro, recarregar }}>
      {children}
    </LivrosContext.Provider>
  )
}
