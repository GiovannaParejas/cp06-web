import { useContext } from 'react'
import { LivrosContext } from '../context/LivrosContext.jsx'

export function useLivros() {
  const contexto = useContext(LivrosContext)
  if (!contexto) throw new Error('useLivros precisa estar dentro de <LivrosProvider>')
  return contexto
}
