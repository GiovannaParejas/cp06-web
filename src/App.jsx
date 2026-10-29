import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Pesquisa from './pages/Pesquisa.jsx'
import Lancamentos from './pages/Lancamentos.jsx'
import Categorias from './pages/Categorias.jsx'
import CategoriaDetalhe from './pages/CategoriaDetalhe.jsx'
import Favoritos from './pages/Favoritos.jsx'
import NaoEncontrado from './pages/NaoEncontrado.jsx'

export default function App() {
  const location = useLocation()

  // Volta ao topo a cada troca de página
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* A `key` faz o <main> remontar a cada rota, disparando a animação de transição */}
      <main key={location.pathname} className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <Routes>
          <Route path="/" element={<Pesquisa />} />
          <Route path="/lancamentos" element={<Lancamentos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categorias/:slug" element={<CategoriaDetalhe />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </main>

      <footer className="border-t border-stone-200 py-6 text-center text-sm text-stone-500 dark:border-stone-800">
        CP 06 · Biblioteca Front-end com React e Tailwind
      </footer>
    </div>
  )
}
