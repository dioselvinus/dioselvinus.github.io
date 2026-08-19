import { Mail } from 'lucide-react'
import { TechIcon } from './TechIcon'
import { getExperienceYears } from '../lib/experience'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const experienceYears = getExperienceYears()

  const skills = [
    { category: 'Front-End', items: ['ReactJS', 'SolidJS', 'VueJS', 'React Native', 'NextJS', 'Tailwind CSS'] },
    { category: 'Back-End', items: ['Go', 'Node.js', 'PHP', 'NestJS', 'Python', 'Laravel'] },
    { category: 'Databases', items: ['PostgreSQL', 'PostGIS', 'Redis', 'Elasticsearch', 'MongoDB'] },
    { category: 'Tools & DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Prometheus', 'Podman'] },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 bg-[var(--color-bg)]"
      aria-labelledby="about-title"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4"
          >
            {t('about.title')}
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            <strong className="text-[var(--color-text)]">{t('about.subtitle.highlight')}</strong>
            {t('about.subtitle', { years: experienceYears })}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-[var(--color-bg-muted)] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">{t('about.background')}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                {t('about.bg1.pre')}
                <strong>{t('about.bg1.roles')}</strong>
                {t('about.bg1.post', { years: experienceYears })}
              </p>
              <p
                className="text-[var(--color-text-secondary)] leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: t('about.bg2') }}
              />
              <p
                className="text-[var(--color-text-secondary)] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('about.bg3') }}
              />
            </div>

            <div className="bg-primary text-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">{t('about.ctaTitle')}</h3>
              <p className="text-white/90 mb-6">{t('about.ctaBody')}</p>
              <a
                href="mailto:dselvinus@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                {t('about.ctaEmail')}
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-6">{t('about.skills')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.category} className="bg-[var(--color-bg-muted)] rounded-xl p-6">
                  <h4 className="font-medium text-[var(--color-text)] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-sm bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded-full"
                      >
                        <TechIcon tech={item} className="w-4 h-4" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}