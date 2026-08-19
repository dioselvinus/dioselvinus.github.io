import { useState, useEffect } from 'react'
import { useLanguage, useRoles } from '../context/LanguageContext'
import { getExperienceYears } from '../lib/experience'

export default function Hero() {
  const { t } = useLanguage()
  const roles = useRoles()
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  const experienceYears = getExperienceYears()

  useEffect(() => {
    const full = roles[roleIndex]
    const speed = deleting ? 40 : 90

    if (!deleting && text === full) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const t = setTimeout(() => {
      setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1))
    }, speed)

    return () => clearTimeout(t)
  }, [text, deleting, roleIndex, roles])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-[var(--color-hero-bg)]"
      aria-labelledby="hero-title"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            {t('hero.greeting')}
          </p>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--color-text)] leading-tight mb-6"
          >
            Dio Selvinus Silalebit
          </h1>
          <div className="flex items-center justify-center gap-2 mb-8 min-h-[2.5rem]">
            <span className="text-xl md:text-2xl lg:text-3xl text-[var(--color-text-muted)] font-medium">
              {t('hero.iAm')}
            </span>
            <span
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary"
              role="text"
              aria-live="polite"
            >
              {text}
              <span className="inline-block w-0.5 h-[1em] ml-1 bg-primary align-middle animate-pulse" aria-hidden="true" />
            </span>
          </div>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.desc.pre', { years: experienceYears })}
            <strong className="text-[var(--color-text)]">{t('hero.desc.highlight')}</strong>
            {t('hero.desc.post')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-[var(--color-primary-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {t('hero.ctaProjects')}
            </a>
            <a
              href="mailto:dselvinus@gmail.com"
              className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-[var(--color-primary-light)] hover:bg-opacity-10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {t('hero.ctaContact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}