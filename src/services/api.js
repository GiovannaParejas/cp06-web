import { categoriaDoLivro } from '../data/categorias.js'

const API_URL =
  'https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json'

/**
 * Busca os livros na API e normaliza os campos.
 * A API retorna `resumo`; o enunciado fala em `descricao` — aceitamos os dois.
 */
export async function buscarLivros(signal) {
  const resposta = await fetch(API_URL, { signal })

  if (!resposta.ok) {
    throw new Error(`Falha ao carregar livros (HTTP ${resposta.status})`)
  }

  const dados = await resposta.json()

  if (!Array.isArray(dados)) {
    throw new Error('Formato de resposta inesperado da API')
  }

  return dados.map((livro) => ({
    id: livro.id,
    titulo: livro.titulo,
    imagem: livro.imagem,
    descricao: livro.descricao ?? livro.resumo ?? '',
    ano: livro.ano ?? null,
    categoria: livro.categoria ?? categoriaDoLivro(livro.id),
  }))
}
