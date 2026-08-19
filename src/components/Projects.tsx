import projectsData from '../data/projects.json'
import { ExternalLink, Play } from 'lucide-react'
import { TechIcon } from './TechIcon'
import { useLanguage } from '../context/LanguageContext'
import { useState } from 'react'

interface Project {
  id: string
  title: string
  subtitle: string
  url: string
  type: string
  image: string
  videoYoutubeId?: string
  date: string
  description: string
  tech: string[]
}

function ProjectMedia({ project }: { project: Project }) {
  const [play, setPlay] = useState(false)

  if (!project.videoYoutubeId) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${project.image}`}
        alt={`Screenshot ${project.title}`}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    )
  }

  if (play) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${project.videoYoutubeId}?autoplay=1`}
        title={project.title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <button
      onClick={() => setPlay(true)}
      className="absolute inset-0 w-full h-full group"
      aria-label={`Play video ${project.title}`}
    >
      <img
        src={`${import.meta.env.BASE_URL}${project.image}`}
        alt=""
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <span className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
        </span>
      </span>
    </button>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const projects = projectsData as Project[]

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-[var(--color-section-alt)]"
      aria-labelledby="projects-title"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2
            id="projects-title"
            className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4"
          >
            {t('projects.title')}
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            {t('projects.subtitle.pre')}
            <strong className="text-[var(--color-text)]">{t('projects.subtitle.highlight')}</strong>
            {t('projects.subtitle.post')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-[var(--color-bg-card)] rounded-2xl overflow-hidden shadow-[var(--color-card-shadow)] border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-video bg-[var(--color-bg-muted)] relative overflow-hidden">
                <ProjectMedia project={project} />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[var(--color-bg-card)]/90 backdrop-blur-sm text-xs font-medium text-[var(--color-text)] rounded-full">
                    {t(`projects.type.${project.type === 'Company Project' ? 'company' : 'personal'}`)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">{project.title}</h3>
                <p className="text-[var(--color-text-muted)] mb-4 line-clamp-2">{project.subtitle}</p>
                <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2">
                  {t(`projects.desc.${project.id}`)}
                </p>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded-full"
                    >
                      <TechIcon tech={tech} className="w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-[var(--color-primary-hover)] transition-colors"
                >
                  {t('projects.cta')}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}