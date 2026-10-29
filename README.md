# 📚 Biblioteca Front-end - CP 06

Aplicação em **React + Tailwind CSS** que consome uma API pública de livros de Front-end, com páginas de **Pesquisa**, **Últimos Lançamentos** e **Categorias**, navegação via **React Router**, animações, tratamento de loading/erro e extras de **modo escuro**, **paginação** e **favoritos em localStorage**.

---

### Observações sobre a API
- A API retorna o texto do livro no campo **`resumo`**. O serviço normaliza para `descricao` (aceitando os dois nomes).
- A API **não tem `ano` nem `categoria`**. Por isso:
  - os lançamentos são ordenados pelo `ano` se ele existir e, caso contrário, pela **ordem da API** (id maior = mais recente), como permitido no enunciado;
  - as categorias são definidas em `src/data/categorias.js`, associando cada livro pelo `id`. Se a API passar a enviar `categoria`, ela tem prioridade.

---
## Link Vercel
https://cp06-web.vercel.app/

## 🚀 Como rodar

Pré-requisito: **Node.js 20+**

```bash
git clone https://github.com/GiovannaParejas/cp06-web.git
cd cp06-web
npm install
npm run dev
```

Acesse `http://localhost:5173`.

---

## 🗂️ Estrutura do código

```
src/
├── main.jsx                 # Ponto de entrada: Router + Providers
├── App.jsx                  # Layout, rotas e transição de página
├── index.css                # Tailwind, tema (fontes/animações) e modo escuro
├── services/
│   └── api.js               # fetch da API + normalização dos dados
├── data/
│   └── categorias.js        # Definição das categorias e mapeamento por id
├── context/
│   ├── LivrosContext.jsx    # Busca os livros uma vez e compartilha (loading/erro/recarregar)
│   └── FavoritosContext.jsx # Favoritos persistidos no localStorage
├── hooks/
│   ├── useLivros.js
│   ├── useFavoritos.js
│   └── useTema.js           # Toggle claro/escuro
├── components/
│   ├── Header.jsx           # Navegação (desktop + menu mobile) e toggle de tema
│   ├── BookCard.jsx         # Card do livro (hover, selo de lançamento, favorito)
│   ├── BookGrid.jsx         # Grade responsiva de cards
│   ├── SearchBar.jsx
│   ├── Pagination.jsx
│   ├── PageHeader.jsx
│   ├── Loading.jsx          # Skeleton de carregamento
│   ├── ErrorMessage.jsx
│   └── EmptyState.jsx
└── pages/
    ├── Pesquisa.jsx         # Rota /
    ├── Lancamentos.jsx      # Rota /lancamentos
    ├── Categorias.jsx       # Rota /categorias
    ├── CategoriaDetalhe.jsx # Rota /categorias/:slug
    ├── Favoritos.jsx        # Rota /favoritos
    └── NaoEncontrado.jsx    # 404
```
---

## 🛠️ Tecnologias
React 19 · React Router 7 · Tailwind CSS 4 · Vite

## Uso de IA

- Criação do texto que compõe o site
- Ajuda na lógica de separação de pastas
- Ajuda na criação do README.md
