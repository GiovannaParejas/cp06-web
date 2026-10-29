import { createContext, useCallback, useEffect, useState } from 'react'

const CHAVE = 'favoritos'

export const FavoritosContext = createContext(null)

function lerFavoritos() {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE))
    return Array.isArray(salvo) ? salvo : []
  } catch {
    return []
  }
}

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(lerFavoritos)

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(favoritos))
    } catch {
    }
  }, [favoritos])

  const alternarFavorito = useCallback((id) => {
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((f) => f !== id) : [...atual, id],
    )
  }, [])

  const ehFavorito = useCallback((id) => favoritos.includes(id), [favoritos])

  return (
    <FavoritosContext.Provider value={{ favoritos, alternarFavorito, ehFavorito }}>
      {children}
    </FavoritosContext.Provider>
  )
}
