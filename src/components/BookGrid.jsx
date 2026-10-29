import BookCard from './BookCard.jsx'

export default function BookGrid({ livros, destacarPrimeiros = 0 }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {livros.map((livro, i) => (
        <BookCard key={livro.id} livro={livro} indice={i} destaque={i < destacarPrimeiros} />
      ))}
    </div>
  )
}
