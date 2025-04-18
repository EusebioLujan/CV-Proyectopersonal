'use client'

import { LanguageSwitch } from "./language-switch"
import { useTranslations } from "../hooks/use-translations"
import { useLanguage } from "../contexts/language-context"
import { useHeaderWeather } from "../hooks/use-header-weather"

export function Header() {
  const { t } = useTranslations()
  const { language } = useLanguage()
  const { weather, loading, error } = useHeaderWeather()
  
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
            {loading ? (
              <span>{t('weather.loading')}</span>
            ) : error ? (
              <span>{error}</span>
            ) : weather ? (
              <div className="flex items-center">
                <img 
                  src={weather.icon} 
                  alt={weather.description}
                  className="h-6 w-6 mr-1"
                />
                <span>{weather.location}: {weather.temp}°C - {weather.description}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
} 