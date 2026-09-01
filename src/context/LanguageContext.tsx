'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Lang } from '@/lib/translations'

type LangContextType = {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextType>({ lang: 'ja', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ja')

  useEffect(() => {
    const saved = localStorage.getItem('pb-lang') as Lang | null
    if (saved && ['ja', 'en', 'fr'].includes(saved)) {
      setLangState(saved)
      document.documentElement.lang = saved === 'fr' ? 'fr' : saved === 'en' ? 'en' : 'ja'
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('pb-lang', l)
    document.documentElement.lang = l === 'fr' ? 'fr' : l === 'en' ? 'en' : 'ja'
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLanguage() {
  return useContext(LangContext)
}
