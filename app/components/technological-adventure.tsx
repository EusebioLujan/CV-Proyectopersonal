'use client'

import { useTranslations } from "../hooks/use-translations"

export function TechnologicalAdventure() {
  const { t } = useTranslations()

  return (
    <div className="border border-gray-800 p-4 bg-old-paper-light">
      <h2 className="text-center text-2xl font-bold mb-4 newspaper-heading font-playfair">
        {t('adventure.title')}
      </h2>
      <div className="columns-2 gap-6 text-sm leading-tight text-justify">
        <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:leading-none mb-3">
          {t('adventure.content')}
        </p>
        <p className="mb-3">
          {t('adventure.quote')}
        </p>
        <p>
          {t('adventure.content2')}
        </p>
        <div className="vintage-ad mt-4 p-3 border border-gray-800 text-center">
          <div className="text-xs uppercase tracking-widest">
            {t('advertisement.title')}
          </div>
          <div className="text-lg font-bold mt-1">
            {t('advertisement.heading')}
          </div>
          <div className="text-sm italic mt-1">{t('advertisement.subheading')}</div>
          <div className="text-xs mt-1">{t('advertisement.footer')}</div>
        </div>
      </div>
    </div>
  )
} 