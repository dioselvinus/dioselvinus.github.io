import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  const buttonClass = (active: boolean) =>
    `px-3 py-1 text-xs font-medium rounded-full transition-colors ${
      active ? 'bg-primary text-white' : 'text-[var(--color-text-secondary)] hover:text-primary'
    }`

  return (
    <div
      className="flex items-center rounded-full border border-[var(--color-border)] p-0.5"
      role="group"
      aria-label="Language"
    >
      <button onClick={() => setLang('id')} className={buttonClass(lang === 'id')} aria-pressed={lang === 'id'}>
        ID
      </button>
      <button onClick={() => setLang('en')} className={buttonClass(lang === 'en')} aria-pressed={lang === 'en'}>
        EN
      </button>
    </div>
  )
}