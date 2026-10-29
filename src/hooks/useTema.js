import { useEffect, useState } from 'react'

function temaInicial() {
  return document.documentElement.classList.contains('dark') ? 'escuro' : 'claro'
}

export function useTema() {
  const [tema, setTema] = useState(temaInicial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'escuro')
    try {
      localStorage.setItem('tema', tema)
    } catch {
    }
  }, [tema])

  const alternarTema = () => setTema((t) => (t === 'escuro' ? 'claro' : 'escuro'))

  return { tema, alternarTema }
}
