import { Link } from 'react-router-dom'
import EmptyState from '../components/EmptyState.jsx'

export default function NaoEncontrado() {
  return (
    <EmptyState icone="🧭" titulo="Página não encontrada">
      <Link to="/" className="font-medium text-amber-600 underline dark:text-amber-400">
        Voltar para o acervo
      </Link>
    </EmptyState>
  )
}
