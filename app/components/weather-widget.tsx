'use client'

import { Sun, Cloud, MapPin } from "lucide-react"
import { useTranslations } from "../hooks/use-translations"

export function WeatherWidget() {
  const { t } = useTranslations()

  const days = [
    { key: 'today', icon: Sun, temp: '25°C' },
    { key: 'tomorrow', icon: Cloud, temp: '22°C' },
    { key: 'tuesday', icon: Sun, temp: '24°C' }
  ]

  return (
    <div className="border border-gray-800 bg-old-paper-light">
      <div className="bg-gray-800 text-white px-4 py-1 text-center font-bold">
        {t('weather.title')}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="font-bold">{t('weather.location')}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {days.map(({ key, icon: Icon, temp }) => (
            <div key={key} className="bg-blue-900 text-white p-2 flex flex-col items-center">
              <span className="text-xs">{t(`weather.days.${key}`)}</span>
              <Icon className="my-2 h-6 w-6" />
              <span className="font-bold">{temp}</span>
            </div>
          ))}
        </div>
        <div className="text-xs text-center mt-2 italic">
          {t('weather.footer')}
        </div>
      </div>
    </div>
  )
} 