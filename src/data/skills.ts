export type SkillLevel = 'Domino' | 'Em prática' | 'Estudando'

export interface Skill {
  name: string
  level: SkillLevel
  /** Detalhe curto e honesto sobre o nível atual. */
  note?: string
  /** Aparece entre as tecnologias principais da página inicial. */
  featured?: boolean
}

export interface SkillGroup {
  title: string
  skills: Skill[]
}

/** Atualize `level` conforme sua evolução. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Programação',
    skills: [
      { name: 'Python', level: 'Em prática', note: 'Nível inicial', featured: true },
      { name: 'Pandas', level: 'Estudando', featured: true },
      { name: 'NumPy', level: 'Estudando' },
    ],
  },
  {
    title: 'Banco de dados',
    skills: [
      { name: 'SQL', level: 'Em prática', note: 'Nível básico', featured: true },
      { name: 'SQLite', level: 'Estudando' },
    ],
  },
  {
    title: 'Visualização',
    skills: [
      { name: 'Power BI', level: 'Estudando' },
      { name: 'Streamlit', level: 'Estudando', featured: true },
      { name: 'Plotly', level: 'Estudando', featured: true },
    ],
  },
  {
    title: 'Ferramentas',
    skills: [
      { name: 'Git', level: 'Estudando' },
      { name: 'GitHub', level: 'Estudando' },
      { name: 'VS Code', level: 'Estudando' },
    ],
  },
]

export const featuredSkills = skillGroups.flatMap((group) => group.skills).filter((skill) => skill.featured)
