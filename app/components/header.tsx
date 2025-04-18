'use client'

import { Sun } from "lucide-react"
import { LanguageSwitch } from "./language-switch"
import { useTranslations } from "../hooks/use-translations"
import { useLanguage } from "../contexts/language-context"

export function Header() {
  const { t } = useTranslations()
  const { language } = useLanguage()
  
  // Get current date in vintage newspaper format
  const today = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  
  // Formatear la fecha según el idioma seleccionado
  const formattedDate = today.toLocaleDateString(
    language === 'en' ? 'en-US' : 'es-ES',
    options
  )

  return (
    <header className="border-b-2 border-gray-800 py-6 px-6 bg-old-paper-dark relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-sm uppercase tracking-widest mb-2">
          {formattedDate}
        </div>
        <div className="text-5xl md:text-6xl font-fraktur tracking-wide ornate-title mb-2">
          {t('header.title')}
        </div>
        <div className="text-sm uppercase tracking-widest font-bold">
          {t('header.subtitle')}
        </div>

        <div className="flex justify-between items-center mt-4 text-xs border-t border-b border-gray-800 py-2">
          <div className="flex items-center">
            <LanguageSwitch />
          </div>
          <div className="flex items-center">
            <Sun className="h-3 w-3 mr-1 text-yellow-600" />
            <span>{t('header.weather')}</span>
          </div>
        </div>
      </div>
    </header>
  )
} 