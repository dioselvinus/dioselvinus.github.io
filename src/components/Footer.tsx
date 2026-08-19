import { Mail, ExternalLink } from 'lucide-react'
import { getExperienceYears } from '../lib/experience'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  const experienceYears = getExperienceYears()

  const links = {
    explore: [
      { labelKey: 'nav.home', href: '#home' },
      { labelKey: 'nav.projects', href: '#projects' },
      { labelKey: 'nav.about', href: '#about' },
    ],
    connect: [
      { labelKey: 'footer.email', href: 'mailto:dselvinus@gmail.com' },
      { labelKey: 'footer.github', href: 'https://github.com/dioselvinus', external: true },
      { labelKey: 'footer.linkedin', href: 'https://linkedin.com/in/dioselvinus', external: true },
    ],
  }

  return (
    <footer className="bg-[var(--color-footer-bg)] border-t border-[var(--color-border)]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">Dio Selvinus Silalebit</h3>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
              {t('footer.bio')}
            </p>
          </div>
          <nav aria-label="Explore">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">{t('footer.explore')}</h3>
            <ul className="space-y-2">
              {links.explore.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--color-text-muted)] hover:text-primary transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Connect">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">{t('footer.connect')}</h3>
            <ul className="space-y-2">
              {links.connect.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-[var(--color-text-muted)] hover:text-primary transition-colors text-sm flex items-center gap-1"
                  >
                    {t(link.labelKey)}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="font-semibold text-[var(--color-text)] mb-4">{t('footer.status')}</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li>{t('footer.status.job')}</li>
              <li>{t('footer.status.edu')}</li>
              <li>{t('footer.status.exp', { years: experienceYears })}</li>
              <li>{t('footer.status.loc')}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/dioselvinus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-primary transition-colors flex items-center"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:dselvinus@gmail.com"
              className="text-[var(--color-text-muted)] hover:text-primary transition-colors flex items-center"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
