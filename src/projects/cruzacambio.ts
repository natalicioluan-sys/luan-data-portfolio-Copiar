import type { ProjectData } from './types'

const images = '/images/projects/cruzacambio'

export const cruzacambio: ProjectData = {
  slug: 'cruzacambio',
  name: 'CruzaCâmbio',
  subtitle: 'Inteligência Cambial',
  category: 'Inteligência financeira',
  context: 'Projeto independente',
  status: 'Em desenvolvimento',
  published: true,
  statusNote:
    'Versão 0.2. A coleta direta da Ita Cambios funciona. As demais casas chegam por uma API pública agregadora, e a atualização contínua só roda enquanto o comando local está aberto. A coleta ainda não é totalmente automatizada.',
  illustration: 'exchange',
  summary:
    'Plataforma para monitorar e comparar cotações de casas de câmbio em Ciudad del Este, com foco em real, guarani e dólar.',
  problem:
    'As cotações ficam espalhadas entre várias casas e filiais, o que dificulta comparar valores e acompanhar sua variação.',
  technologies: {
    used: ['Python', 'Pandas', 'SQL', 'SQLite', 'Streamlit', 'Plotly', 'Requests', 'BeautifulSoup', 'Pytest'],
    planned: ['PostgreSQL', 'Agendador na hospedagem'],
  },
  images: [
    {
      src: `${images}/comparador.webp`,
      alt: 'Tela do comparador do CruzaCâmbio com filtros de moeda e operação, indicadores e tabela de cotações das filiais da Ita Cambios.',
      caption:
        'Comparador em execução local, com cotações reais da Ita Cambios coletadas em 23/11/2026. Valores referenciais.',
      width: 1400,
      height: 632,
    },
    {
      src: `${images}/mobile.webp`,
      alt: 'Comparador do CruzaCâmbio em tela de celular, com seletores de moeda, operação, valor e indicadores.',
      caption: 'Mesma tela em largura de celular.',
      width: 520,
      height: 1052,
      device: 'mobile',
    },
  ],
  cardImage: `${images}/card.webp`,
  links: { github: null, demo: null },
  sections: [
    {
      id: 'contexto',
      title: 'Contexto e problema',
      blocks: [
        {
          type: 'text',
          paragraphs: [
            'Ciudad del Este concentra casas de câmbio que operam com real brasileiro, guarani paraguaio e dólar americano, entre outras moedas. Cada casa publica seus próprios valores, às vezes diferentes por filial e atualizados em horários distintos.',
            'Para comparar, é preciso consultar várias fontes e observar se os valores se referem à mesma operação e ao mesmo momento. Uma cotação isolada também não mostra como o preço evoluiu.',
          ],
        },
      ],
    },
    {
      id: 'objetivo',
      title: 'Objetivo da solução',
      blocks: [
        {
          type: 'text',
          paragraphs: [
            'Desenvolver uma plataforma que acompanhe cotações, armazene o histórico, compare casas de câmbio e mostre variações ao longo do tempo, sempre com a fonte e o horário de cada valor.',
          ],
        },
      ],
    },
    {
      id: 'arquitetura',
      title: 'Arquitetura técnica',
      blocks: [
        {
          type: 'architecture',
          steps: [
            { title: 'Fontes', detail: 'Site da Ita Cambios, API pública do Câmbio CDE (Serenda), importação por CSV e formulário administrativo.' },
            { title: 'Coletores com política de acesso', detail: 'Cada fonte tem regras próprias de permissão e intervalo mínimo. Uma fonte não autorizada é recusada antes de qualquer requisição.' },
            { title: 'Validação e normalização', detail: 'Limites configuráveis, horários em UTC e classificação em válida, suspeita ou rejeitada.' },
            { title: 'SQLite com histórico imutável', detail: 'Gatilhos de banco impedem alterar ou apagar cotações. Correções criam novos registros com motivo e responsável.' },
            { title: 'Serviços de análise', detail: 'Ranking e conversão nos dois sentidos, separados da interface.' },
            { title: 'Interface Streamlit', detail: 'Comparador, histórico, casas e filiais, e guia de uso, com leitura dos dados armazenados.' },
          ],
        },
      ],
    },
    {
      id: 'fontes',
      title: 'Situação das fontes',
      blocks: [
        {
          type: 'list',
          tone: 'implemented',
          items: [
            'Ita Cambios: coleta direta do site oficial, conferida com 19 de 19 valores iguais em 23/11/2026.',
            'Outras 11 casas: dados recebidos pela API pública do Câmbio CDE (Serenda), com crédito visível na aplicação.',
          ],
        },
        {
          type: 'notice',
          text: 'Não existe coletor direto para a Yrendague, porque seus termos de uso proíbem a extração sistemática de cotações sem autorização. Casas com restrições próprias serão avaliadas antes de qualquer publicação da aplicação.',
        },
      ],
    },
    { id: 'tecnologias', title: 'Tecnologias utilizadas', blocks: [{ type: 'technologies' }] },
    {
      id: 'implementado',
      title: 'Funcionalidades já implementadas',
      blocks: [
        {
          type: 'list',
          tone: 'implemented',
          items: [
            'Comparador por par de moedas, do ponto de vista do cliente.',
            'Conversão nos dois sentidos, com a fórmula exibida.',
            'Histórico imutável, com correções e retratações rastreáveis.',
            'Horários guardados em UTC e exibidos no fuso de Ciudad del Este.',
            'Proteção contra importações e cotações duplicadas.',
            'Alerta para valores suspeitos e cotações antigas.',
            'Importação por CSV e painel administrativo protegido por senha.',
            'Atualização a cada 15 minutos enquanto o comando local está em execução.',
            '121 testes automatizados, executados sem acesso a sites externos.',
          ],
        },
      ],
    },
    {
      id: 'planejado',
      title: 'Funcionalidades planejadas',
      blocks: [
        {
          type: 'list',
          tone: 'planned',
          items: [
            'Agendador de coletas na hospedagem.',
            'Migração para PostgreSQL e publicação da aplicação.',
            'Análises históricas completas, após acumular dados suficientes.',
            'Mapa interativo com coordenadas verificadas.',
            'Nova interface e expansão com novas fontes autorizadas.',
          ],
        },
      ],
    },
    { id: 'capturas', title: 'Capturas de tela', blocks: [{ type: 'gallery' }] },
    {
      id: 'aprendizados',
      title: 'Aprendizados técnicos',
      blocks: [
        {
          type: 'list',
          tone: 'learning',
          items: [
            'Modelar dados históricos sem sobrescrever registros.',
            'Tratar fusos horários de forma consistente entre fonte, banco e tela.',
            'Validar dados antes de usá-los em comparações.',
            'Verificar robots.txt e termos de uso antes de automatizar uma coleta.',
            'Separar coleta, regras de negócio e interface.',
            'Testar coletores com arquivos salvos, sem depender de sites externos.',
          ],
        },
      ],
    },
    { id: 'repositorio', title: 'Repositório GitHub', blocks: [{ type: 'repository' }] },
  ],
}
