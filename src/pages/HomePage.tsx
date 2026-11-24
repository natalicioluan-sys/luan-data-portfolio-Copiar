import { ArrowRight, Award, Briefcase, FolderGit2, GraduationCap, Mail, MapPin, Route, Target, UserRound } from 'lucide-react'
import { Link } from 'react-router'
import { HeroPipeline } from '../components/home/HeroPipeline'
import { ButtonLink } from '../components/ui/ButtonLink'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatusBadge } from '../components/ui/StatusBadge'
import { profile } from '../data/profile'
import { featuredSkills, skillGroups, type SkillLevel } from '../data/skills'
import { projects } from '../projects'

const levelStyle: Record<SkillLevel, string> = {
  Domino: 'bg-good',
  'Em prática': 'bg-accent',
  Estudando: 'border border-muted',
}

const sectionClass = 'mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24'

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24">
      <div className="rise min-w-0">
        <p className="mb-3 font-mono text-sm text-accent">{profile.role}</p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-5 max-w-xl text-xl leading-snug text-ink sm:text-2xl">{profile.tagline}</p>
        <div className="mt-5 max-w-xl space-y-3 text-soft">
          {profile.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/projetos" variant="primary">
            Ver projetos <ArrowRight size={16} aria-hidden />
          </ButtonLink>
          <ButtonLink to="/#trajetoria">
            <Route size={16} aria-hidden /> Minha trajetória
          </ButtonLink>
          {profile.contact.github && (
            <ButtonLink href={profile.contact.github}>
              <FolderGit2 size={16} aria-hidden /> GitHub
            </ButtonLink>
          )}
          <ButtonLink to="/#contato">
            <Mail size={16} aria-hidden /> Contato
          </ButtonLink>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs text-muted">Tecnologias principais</span>
          <ul className="flex flex-wrap gap-1.5">
            {featuredSkills.map((skill) => (
              <li key={skill.name} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-soft">
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rise [animation-delay:120ms]">
        <HeroPipeline />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="border-t border-line">
      <div className={`${sectionClass} grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16`}>
        <div>
          <SectionHeading index="01" title="Sobre mim" />
          <div className="max-w-2xl space-y-4 text-soft">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <dl className="self-end divide-y divide-line rounded-lg border border-line bg-surface">
          <div className="flex gap-3 p-5">
            <Target size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            <div>
              <dt className="text-xs text-muted">Objetivo profissional</dt>
              <dd className="text-sm font-medium">{profile.objective}</dd>
            </div>
          </div>
          <div className="flex gap-3 p-5">
            <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            <div>
              <dt className="text-xs text-muted">Localização</dt>
              <dd className="text-sm font-medium">{profile.location}</dd>
            </div>
          </div>
          <div className="p-5">
            <dt className="mb-2 text-xs text-muted">Interesses</dt>
            <dd className="text-sm text-soft">{profile.interests.join(' · ')}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section id="trajetoria" className="border-t border-line">
      <div className={sectionClass}>
        <SectionHeading index="02" title="Trajetória">
          Do mercado financeiro e do comércio para a área de dados.
        </SectionHeading>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold">
              <Briefcase size={16} className="text-accent" aria-hidden /> Experiência profissional
            </h3>
            <ol className="space-y-8 border-l border-line">
              {profile.experience.map((item) => (
                <li key={item.organization} className="relative pl-6">
                  <span className="absolute -left-[5px] top-2 size-2.5 rounded-full border-2 border-canvas bg-accent" aria-hidden />
                  <h4 className="font-semibold tracking-tight">{item.role}</h4>
                  <p className="text-sm text-soft">{item.organization}</p>
                  {item.period && <p className="mt-0.5 font-mono text-xs text-muted">{item.period}</p>}
                  <p className="mt-3 text-sm text-soft">{item.summary}</p>
                  {item.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2 text-sm text-soft">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-muted" aria-hidden />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-5 self-start">
            <div className="rounded-lg border border-line bg-surface p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <GraduationCap size={16} className="text-accent" aria-hidden /> Formação acadêmica
              </h3>
              <p className="text-sm font-medium">Graduação em {profile.education.course}</p>
              <p className="text-sm text-soft">{profile.education.institution}</p>
              <p className="mt-1 text-xs text-muted">
                {profile.education.modality} · {profile.education.status}
              </p>
            </div>
            <div className="rounded-lg border border-line bg-surface p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <Award size={16} className="text-accent" aria-hidden /> Certificações
              </h3>
              <ul className="space-y-2">
                {profile.certifications.map((certification) => (
                  <li key={certification.name} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="font-medium">{certification.name}</span>
                    <span className="text-xs text-muted">{certification.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const usedLevels = (['Domino', 'Em prática', 'Estudando'] as SkillLevel[]).filter((level) =>
    skillGroups.some((group) => group.skills.some((skill) => skill.level === level)),
  )

  return (
    <section id="habilidades" className="border-t border-line">
      <div className={sectionClass}>
        <SectionHeading index="03" title="Habilidades técnicas">
          Minha formação está em andamento. Os níveis abaixo mostram onde estou hoje.
        </SectionHeading>
        <ul className="mb-6 flex flex-wrap gap-4 text-xs text-soft" aria-label="Legenda de níveis">
          {usedLevels.map((level) => (
            <li key={level} className="flex items-center gap-2">
              <span className={`size-2 rounded-full ${levelStyle[level]}`} aria-hidden />
              {level}
            </li>
          ))}
        </ul>
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-surface p-5">
              <h3 className="mb-4 text-sm font-semibold">{group.title}</h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-start gap-2.5">
                    <span className={`mt-2 size-2 shrink-0 rounded-full ${levelStyle[skill.level]}`} aria-hidden />
                    <span>
                      <span className="block text-sm">{skill.name}</span>
                      <span className="block text-xs text-muted">
                        {skill.level}
                        {skill.note ? ` · ${skill.note}` : ''}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsPreview() {
  return (
    <section id="projetos" className="border-t border-line">
      <div className={sectionClass}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading index="04" title="Projetos">
            Trabalhos práticos, apresentados no estágio em que realmente estão.
          </SectionHeading>
          <div className="mb-10">
            <ButtonLink to="/projetos">
              Ver todos <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          </div>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/projetos/${project.slug}`}
                className="group grid gap-1 py-5 transition-colors hover:bg-surface sm:grid-cols-[3rem_1fr_auto_1.25rem] sm:items-center sm:gap-4 sm:px-3"
              >
                <span className="hidden font-mono text-xs text-muted sm:block">{project.number}</span>
                <span>
                  <span className="block font-semibold tracking-tight">
                    {project.name} <span className="font-normal text-muted">— {project.subtitle}</span>
                  </span>
                  <span className="block text-sm text-soft">{project.summary}</span>
                </span>
                <StatusBadge status={project.status} />
                <ArrowRight size={16} className="hidden text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent sm:block" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  const { github, linkedin, email } = profile.contact
  const channels = [
    github && { label: 'GitHub', value: github.replace(/^https?:\/\/(www\.)?/, ''), href: github, icon: FolderGit2 },
    linkedin && { label: 'LinkedIn', value: linkedin.replace(/^https?:\/\/(www\.)?/, ''), href: linkedin, icon: UserRound },
    email && { label: 'E-mail', value: email, href: `mailto:${email}`, icon: Mail },
  ].filter((channel) => !!channel)

  return (
    <section id="contato" className="border-t border-line">
      <div className={sectionClass}>
        <SectionHeading index="05" title="Contato">
          Aberto a conversar sobre oportunidades em dados, BI e desenvolvimento.
        </SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent/60"
            >
              <Icon size={18} className="mb-3 text-accent" aria-hidden />
              <span className="block text-xs text-muted">{label}</span>
              <span className="block break-words text-sm font-medium">{value}</span>
            </a>
          ))}
          <div className="rounded-lg border border-line bg-surface p-5">
            <MapPin size={18} className="mb-3 text-accent" aria-hidden />
            <span className="block text-xs text-muted">Localização</span>
            <span className="block text-sm font-medium">{profile.location}</span>
          </div>
        </div>
        {import.meta.env.DEV && channels.length < 3 && (
          <p className="mt-4 font-mono text-xs text-muted">
            Aviso visível só em desenvolvimento: preencha os contatos em src/data/profile.ts.
          </p>
        )}
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Skills />
      <ProjectsPreview />
      <Contact />
    </>
  )
}
