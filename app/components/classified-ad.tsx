'use client'

import { Coffee } from "lucide-react"
import { useTranslations } from "../hooks/use-translations"

export function ClassifiedAd() {
  const { t } = useTranslations()

  return (
    <div className="border border-gray-800 p-4 bg-old-paper-light">
      <div className="text-xs uppercase tracking-widest text-center mb-2">
        {t('classified.title')}
      </div>
      <div className="text-center space-y-2">
        <h3 className="font-bold">{t('classified.heading')}</h3>
        <p className="text-sm">
          {t('classified.content')}
        </p>
        <div className="flex justify-center items-center text-sm">
          <Coffee className="h-4 w-4 mr-1" />
          <span>{t('classified.footer')}</span>
        </div>
        <div className="text-xs italic mt-2">
          {t('classified.note')}
        </div>
      </div>
    </div>
  )
} 