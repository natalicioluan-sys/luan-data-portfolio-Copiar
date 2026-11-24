# Portfólio — Luan Natalício

Portfólio profissional de Ciência de Dados, Business Intelligence e Desenvolvimento.

Luan Natalício é graduando em Ciência de Dados pela UFMS (EAD, em andamento), com experiência no mercado financeiro, atendimento e análise comercial.

O site separa projetos concluídos, em desenvolvimento e planejados, e usa apenas capturas reais das aplicações.

## Projetos publicados

| Projeto | Categoria | Status |
|---|---|---|
| CambioCDE — Inteligência Cambial | Inteligência financeira | Em desenvolvimento |
| Quant Intelligence — Plataforma de Inteligência de Mercado | Inteligência financeira | Em desenvolvimento |
| Daily Tasks — Aplicação de Gestão de Tarefas | Desenvolvimento web | Concluído (acadêmico) |
| Sales Intelligence — Análise Comercial | Inteligência comercial | Planejado |

Trading Analytics e Customer Analytics estão guardados com `published: false`. Retail Intelligence será adicionado quando houver implementação.

## Tecnologias

- React 19 e TypeScript
- Vite
- Tailwind CSS 4
- React Router, com páginas pré-renderizadas para SEO
- Lucide Icons
- IBM Plex Sans e IBM Plex Mono, servidas pelo próprio site

## Instalação

Requisitos: Node.js 22.12 ou superior e npm.

```bash
npm install
```

## Como executar localmente

```bash
npm run dev        # ambiente de desenvolvimento
npm run typecheck  # verificação de tipos
npm run build      # build de produção em dist/
npm run preview    # testa o build localmente
```

## Estrutura do projeto

```text
public/
├─ images/projects/  capturas reais, uma pasta por projeto
scripts/             pré-renderização das páginas
src/
├─ assets/           marca
├─ components/
│  ├─ charts/        gráficos
│  ├─ home/          elementos da página inicial
│  ├─ layout/        cabeçalho, rodapé e layout
│  ├─ projects/      cards, ilustrações e blocos de estudo de caso
│  └─ ui/            componentes reutilizáveis
├─ data/             perfil, habilidades e SEO
├─ pages/            páginas do site
├─ projects/         um arquivo de dados por projeto
└─ styles/           tema e estilos globais
```

## Configurar seus dados

Edite `src/data/profile.ts` para atualizar perfil, experiência, certificações, GitHub, LinkedIn, e-mail e a URL final do site. Campos com `null` não aparecem na versão publicada.

Edite `src/data/skills.ts` para atualizar o nível de cada tecnologia: `Domino`, `Em prática` ou `Estudando`.

## Como adicionar um novo projeto

1. Copie um arquivo de `src/projects/`. Use `sales-intelligence.ts` para um projeto planejado ou `daily-tasks.ts` para um projeto com capturas.
2. Altere `slug`, nome, categoria, status, textos, tecnologias e links.
3. Separe `technologies.used`, confirmadas no código, de `technologies.planned`.
4. Salve as capturas em `public/images/projects/<slug>/` e registre-as em `images`.
5. Importe o projeto em `src/projects/index.ts` e adicione-o à lista `allProjects`, na ordem desejada.
6. Para uma categoria nova, inclua-a em `ProjectCategory` em `src/projects/types.ts`.

A página, o card, o filtro e o SEO são gerados automaticamente. Para ocultar um projeto sem apagá-lo, use `published: false`.

Cada seção do estudo de caso é formada por blocos: `text`, `list`, `architecture`, `notice`, `technologies`, `gallery`, `charts`, `repository` e `pending`.

Em gráficos, use `source: 'real'` somente com dados reais. Com `source: 'demo'`, o aviso de dados fictícios é exibido.

## Publicação

### GitHub

```bash
git add .
git commit -m "Descreva a alteração"
git push
```

### Vercel

1. Importe o repositório em [vercel.com/new](https://vercel.com/new).
2. Mantenha as configurações detectadas em `vercel.json`.
3. Publique.

### Domínio próprio

Adicione o domínio em **Settings → Domains** na Vercel e configure o DNS indicado. Depois, preencha `siteUrl` em `src/data/profile.ts`.
