# Portfólio de Dados — Luan

Portfólio profissional para apresentar projetos de Ciência de Dados, Análise de Dados e soluções orientadas a dados.

O site diferencia o que está concluído, em desenvolvimento e planejado. Gráficos com valores fictícios exibem o aviso **Dados demonstrativos**.

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
public/              favicon e robots.txt
scripts/             pré-renderização das páginas
src/
├─ assets/           imagens e marca
├─ components/
│  ├─ charts/        gráficos
│  ├─ home/          elementos da página inicial
│  ├─ layout/        cabeçalho, rodapé e layout
│  ├─ projects/      cards e ilustrações
│  └─ ui/            componentes reutilizáveis
├─ data/             perfil, habilidades e SEO
├─ pages/            páginas do site
├─ projects/         um arquivo de dados por projeto
└─ styles/           tema e estilos globais
```

## Configurar seus dados

Edite `src/data/profile.ts` para informar GitHub, LinkedIn, e-mail e a URL final do site. Campos com `null` não aparecem na versão publicada.

Edite `src/data/skills.ts` para atualizar o nível de cada tecnologia: `Domino`, `Em prática` ou `Estudando`.

## Como adicionar um novo projeto

1. Copie um arquivo de `src/projects/`, por exemplo `customer-analytics.ts`, e renomeie.
2. Altere `slug`, `number`, `name`, `category`, `status`, textos, tecnologias e links.
3. Importe o projeto em `src/projects/index.ts` e adicione-o à lista `projects`.
4. Para uma categoria nova, inclua-a em `ProjectCategory` em `src/projects/types.ts`.

A página e o filtro são gerados automaticamente. Seções com `null` aparecem como pendentes.

Em gráficos, use `source: 'real'` somente com dados reais. Com `source: 'demo'`, o aviso de dados fictícios é exibido.

## Publicação

### GitHub

```bash
git init
git add .
git commit -m "Primeira versão do portfólio"
git branch -M main
git remote add origin <URL-DO-SEU-REPOSITORIO>
git push -u origin main
```

### Vercel

1. Importe o repositório em [vercel.com/new](https://vercel.com/new).
2. Mantenha as configurações detectadas em `vercel.json`.
3. Publique.

### Domínio próprio

Adicione o domínio em **Settings → Domains** na Vercel e configure o DNS indicado. Depois, preencha `siteUrl` em `src/data/profile.ts`.
