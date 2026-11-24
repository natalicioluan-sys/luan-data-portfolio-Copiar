import type { ProjectData } from './types'

const images = '/images/projects/daily-tasks'

export const dailyTasks: ProjectData = {
  slug: 'daily-tasks',
  name: 'Daily Tasks',
  subtitle: 'Aplicação de Gestão de Tarefas',
  category: 'Desenvolvimento web',
  context: 'Projeto acadêmico',
  status: 'Concluído',
  published: true,
  statusNote: 'Atividade acadêmica de desenvolvimento web na UFMS. Não é um projeto de Ciência de Dados.',
  illustration: 'sales',
  summary: 'Aplicação web para cadastrar, concluir, filtrar e remover tarefas, com dados salvos no navegador.',
  problem: 'Organizar tarefas do dia em uma interface simples, sem perder as informações ao recarregar a página.',
  technologies: {
    used: ['Vue.js 3', 'JavaScript', 'HTML', 'CSS', 'localStorage'],
    planned: [],
  },
  images: [
    {
      src: `${images}/lista.webp`,
      alt: 'Aplicação Minhas tarefas diárias com formulário de cadastro e lista de três tarefas, uma delas concluída.',
      caption: 'Aplicação em execução, com tarefas de exemplo.',
      width: 1200,
      height: 975,
    },
    {
      src: `${images}/filtro.webp`,
      alt: 'Lista de tarefas com o filtro Concluídas ativo, exibindo uma tarefa.',
      caption: 'Filtro de tarefas concluídas.',
      width: 1200,
      height: 975,
    },
    {
      src: `${images}/mobile.webp`,
      alt: 'Aplicação de tarefas em tela de celular.',
      caption: 'Layout responsivo em largura de celular.',
      width: 390,
      height: 844,
      device: 'mobile',
    },
  ],
  links: { github: null, demo: null },
  sections: [
    {
      id: 'problema',
      title: 'Descrição do problema',
      blocks: [
        {
          type: 'text',
          paragraphs: [
            'Acompanhar atividades do dia exige um lugar simples para registrar o que precisa ser feito, marcar o que terminou e encontrar o que ainda está pendente.',
          ],
        },
      ],
    },
    {
      id: 'objetivo',
      title: 'Objetivo da aplicação',
      blocks: [
        {
          type: 'text',
          paragraphs: [
            'Construir uma aplicação web interativa que pratique lógica de programação, manipulação de dados, reatividade e persistência local.',
          ],
        },
      ],
    },
    { id: 'tecnologias', title: 'Tecnologias utilizadas', blocks: [{ type: 'technologies' }] },
    {
      id: 'funcionalidades',
      title: 'Funcionalidades',
      blocks: [
        {
          type: 'list',
          tone: 'implemented',
          items: [
            'Cadastro de tarefas com identificação e descrição.',
            'Marcação de tarefas concluídas.',
            'Filtros para todas, pendentes e concluídas.',
            'Contador de tarefas concluídas.',
            'Remoção de tarefas.',
            'Armazenamento local com localStorage.',
            'Interface responsiva.',
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
            'Reatividade com data, computed, watch e methods no Vue.js.',
            'Manipulação de listas de objetos com filter e unshift.',
            'Persistência em JSON no localStorage, com tratamento de erro.',
            'Validação de formulários e estados vazios.',
            'Layout responsivo e atributos de acessibilidade.',
          ],
        },
      ],
    },
    { id: 'repositorio', title: 'Repositório GitHub', blocks: [{ type: 'repository' }] },
  ],
}
