import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../context/LanguageContext'

const navLinks = [
  { href: '#home', labelKey: 'nav.home' },
  { href: '#projects', labelKey: 'nav.projects' },
  { href: '#about', labelKey: 'nav.about' },
]

export default function Navigation() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navText, setNavText] = useState('Dio Selvinus Silalebit')

  const NICKNAME = 'dselvinus.'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!scrolled) {
      setNavText('Dio Selvinus Silalebit')
      return
    }

    let i = 0
    setNavText('')
    const interval = setInterval(() => {
      i++
      setNavText(NICKNAME.slice(0, i))
      if (i >= NICKNAME.length) clearInterval(interval)
    }, 60)

    return () => clearInterval(interval)
  }, [scrolled])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-10 ${
        scrolled ? 'bg-[var(--color-nav-bg)] backdrop-blur-sm shadow-sm border-b border-[var(--color-nav-border)]' : 'bg-transparent'
      }`}
      aria-label={t('nav.main')}
    >
      <div className="max-w-6xl mx-auto px-4 relative h-16">
        {/* Logo - absolute left, vertically centered */}
        <a
          href="#home"
          className="absolute left-0 top-1/2 -translate-y-1/2 font-semibold text-xl text-[var(--color-text)] hover:text-primary transition-colors flex items-center whitespace-nowrap"
          aria-label={t('nav.goHome')}
        >
          {navText}
          {scrolled && (
            <span className="inline-block w-0.5 h-[1em] ml-0.5 bg-primary align-middle animate-pulse" aria-hidden="true" />
          )}
        </a>

        {/* Links - truly centered in viewport */}
        <div className="flex justify-center items-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-primary transition-colors md:flex md:items-center hidden"
            >
              {t(link.labelKey)}
            </a>
          ))}
        </div>

        {/* Theme toggle + language + mobile menu - absolute right, vertically centered */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 py-4 border-t border-[var(--color-nav-border)] bg-[var(--color-nav-bg)]">
            <div className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-[var(--color-text-secondary)] hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
