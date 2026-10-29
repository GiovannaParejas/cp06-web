/**
 * A API não possui campo de categoria, então as categorias são definidas
 * aqui e associadas a cada livro pelo `id`.
 * Se a API passar a enviar `categoria`, o valor dela tem prioridade (ver api.js).
 */
export const CATEGORIAS = [
  {
    slug: 'html-css',
    nome: 'HTML & CSS',
    descricao: 'Marcação, estilos, pré-processadores e frameworks de CSS.',
    icone: '🎨',
    livros: [3, 7, 11, 12],
  },
  {
    slug: 'javascript',
    nome: 'JavaScript',
    descricao: 'A linguagem da web, do básico às boas práticas.',
    icone: '⚡',
    livros: [5, 8],
  },
  {
    slug: 'mobile-pwa',
    nome: 'Mobile & PWA',
    descricao: 'Experiências web pensadas para dispositivos móveis.',
    icone: '📱',
    livros: [1, 10],
  },
  {
    slug: 'ux-design',
    nome: 'UX & Design',
    descricao: 'Acessibilidade, liderança e decisões de design.',
    icone: '🧭',
    livros: [2, 9],
  },
  {
    slug: 'fundamentos',
    nome: 'Fundamentos',
    descricao: 'Guias e coletâneas para ter a visão completa do Front-end.',
    icone: '📚',
    livros: [4, 6],
  },
]

export function categoriaDoLivro(id) {
  return CATEGORIAS.find((c) => c.livros.includes(id))?.slug ?? 'fundamentos'
}

export function buscarCategoria(slug) {
  return CATEGORIAS.find((c) => c.slug === slug)
}
