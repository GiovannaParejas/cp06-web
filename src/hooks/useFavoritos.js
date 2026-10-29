import { useContext } from 'react'
import { FavoritosContext } from '../context/FavoritosContext.jsx'

export function useFavoritos() {
  const contexto = useContext(FavoritosContext)
  if (!contexto) throw new Error('useFavoritos precisa estar dentro de <FavoritosProvider>')
  return contexto
}
