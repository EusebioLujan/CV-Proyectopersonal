'use client'

import { useTranslations } from "../hooks/use-translations"

export function BreakingNews() {
  const { t } = useTranslations()

  return (
    <div className="mb-6 border border-gray-800 bg-old-paper-light">
      <div className="bg-gray-800 text-white px-4 py-1 text-center font-bold">
        {t('breakingNews.title')}
      </div>
      <div className="p-3 text-center italic">
        {t('breakingNews.content')}
      </div>
    </div>
  )
} 