import type { ProjectData } from './types'

const images = '/images/projects/quant-intelligence'

export const quantIntelligence: ProjectData = {
  slug: 'quant-intelligence',
  name: 'Quant Intelligence',
  subtitle: 'Plataforma de Inteligência de Mercado',
  category: 'Inteligência financeira',
  context: 'Projeto independente',
  status: 'Em desenvolvimento',
  published: true,
  statusNote:
    'As capturas usam dados simulados. A leitura de mercado via Profit foi testada apenas após o pregão, sem preço em movimento. O projeto não possui backtests nem resultados financeiros, e não envia ordens.',
  illustration: 'trading',
  summary:
    'Painel analítico que organiza dados de mercado, juros e câmbio e calcula indicadores quantitativos.',
  problem:
    'Preços, juros, câmbio e indicadores ficam em fontes diferentes, o que dificulta analisar o contexto do mercado de forma organizada.',
  technologies: {
    used: ['Python', 'FastAPI', 'WebSocket', 'SQL', 'SQLite', 'HTTPX', 'OpenPyXL', 'HTML', 'CSS', 'JavaScript', 'Pytest'],
    planned: ['Pandas', 'NumPy', 'Plotly', 'Power BI'],
  },
  images: [
    {
      src: `${images}/painel.webp`,
      alt: 'Painel do Quant Intelligence em modo simulação, com leitura de contexto, indicadores de preço, volume, risco e dados macroeconômicos.',
      caption: 'Painel principal em modo simulação. Os dados de mercado são fictícios. Não é recomendação de investimento.',
      width: 1400,
      height: 788,
    },
    {
      src: `${images}/grafico.webp`,
      alt: 'Gráfico de candles com volume, VWAP e níveis de referência, marcado como simulação.',
      caption: 'Gráfico de candles com volume e níveis de referência, em modo simulação.',
      width: 1400,
      height: 788,
    },
    {
      src: `${images}/diario.webp`,
      alt: 'Tela vazia do diário de operações, com campos de registro e exportação em CSV.',
      caption: 'Módulo de diário com exportação em CSV, sem operações registradas.',
      width: 1400,
      height: 788,
    },
  ],
  links: { github: null, demo: null },
  sections: [
    {
      id: 'problema',
      title: 'Problema e objetivo',
      blocks: [
        {
          type: 'text',
          paragraphs: [
            'Quem acompanha o mercado financeiro precisa cruzar preços, juros, câmbio, volume e indicadores vindos de fontes diferentes.',
            'O objetivo é desenvolver uma plataforma para organizar, processar e interpretar essas informações com dados, estatística e análise quantitativa.',
          ],
        },
      ],
    },
    {
      id: 'visao-geral',
      title: 'Visão geral da solução',
      blocks: [
        {
          type: 'text',
          paragraphs: [
            'O sistema reúne dados macroeconômicos públicos e leitura de mercado por planilha conectada ao Profit, calcula indicadores e apresenta tudo em um painel atualizado por WebSocket.',
            'Dados simulados são marcados na tela e não são gravados no banco, para evitar que se misturem aos dados reais.',
          ],
        },
      ],
    },
    {
      id: 'arquitetura',
      title: 'Arquitetura',
      blocks: [
        {
          type: 'architecture',
          steps: [
            { title: 'Fontes', detail: 'Profit via planilha RTD, Banco Central, FRED, Yahoo e curvas de juros da B3.' },
            { title: 'Coleta e validação', detail: 'Módulos separados por fonte, com cache, verificação de qualidade e sinalização de dados antigos.' },
            { title: 'Cálculos quantitativos', detail: 'VWAP, volume, fluxo, risco, curva de juros e dólar justo.' },
            { title: 'SQLite', detail: 'Histórico, candles, ajustes, cache e diário. Dados simulados não são gravados.' },
            { title: 'API FastAPI e WebSocket', detail: 'Rotas de consulta e envio do painel a cada segundo.' },
            { title: 'Interface web', detail: 'Painel em HTML, CSS e JavaScript, com gráficos próprios em canvas.' },
          ],
        },
      ],
    },
    { id: 'tecnologias', title: 'Tecnologias', blocks: [{ type: 'technologies' }] },
    {
      id: 'implementado',
      title: 'Funcionalidades implementadas',
      blocks: [
        {
          type: 'list',
          tone: 'implemented',
          items: [
            'Coleta de PTAX, Selic, Treasuries, indicadores globais e curvas de juros.',
            'Cálculo de VWAP, níveis de referência, dólar justo e indicadores de volume e fluxo.',
            'Calculadora de risco por contrato.',
            'Gráfico de candles em múltiplos períodos.',
            'Diário de operações com exportação em CSV.',
            'Modo de simulação isolado e identificado na interface.',
            'Avisos de dado antigo, desconectado ou sem qualidade suficiente.',
            '147 testes automatizados.',
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
            'Validar a leitura do Profit com o pregão aberto.',
            'Estudos históricos de ativos, volatilidade e tendência.',
            'Métricas de desempenho e análise de risco sobre dados reais.',
            'Estudos quantitativos e identificação de padrões.',
            'Análises com Pandas e NumPy e visualizações com Plotly.',
            'Relatórios em Power BI, quando aplicável.',
          ],
        },
      ],
    },
    {
      id: 'capturas',
      title: 'Exemplos de interface',
      blocks: [
        { type: 'notice', text: 'Imagens em modo simulação. Elas mostram a interface e não representam resultados nem estratégias.' },
        { type: 'gallery' },
      ],
    },
    {
      id: 'proximas-etapas',
      title: 'Próximas etapas do desenvolvimento',
      blocks: [
        {
          type: 'list',
          tone: 'planned',
          items: [
            'Testar a coleta durante o pregão e comparar os valores com a plataforma de origem.',
            'Acumular histórico real no banco de dados.',
            'Definir a coluna de volume e completar os dados da planilha.',
            'Iniciar os estudos estatísticos com dados reais armazenados.',
          ],
        },
      ],
    },
    { id: 'repositorio', title: 'Repositório GitHub', blocks: [{ type: 'repository' }] },
  ],
}
