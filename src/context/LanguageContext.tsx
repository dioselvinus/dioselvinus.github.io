import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { messages, roles, type Lang } from '../i18n/translations'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const defaultContext: LanguageContextType = {
  lang: 'id',
  setLang: () => {},
  t: (key) => key,
}

const LanguageContext = createContext<LanguageContextType>(defaultContext)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'id'
  const stored = localStorage.getItem('lang')
  if (stored === 'id' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const setLang = (next: Lang) => setLangState(next)

  const t = (key: string, vars?: Record<string, string | number>): string => {
    let value = messages[lang][key] ?? key
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        value = value.split(`{${k}}`).join(String(v))
      }
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function useRoles(): string[] {
  const { lang } = useLanguage()
  return roles[lang]
}