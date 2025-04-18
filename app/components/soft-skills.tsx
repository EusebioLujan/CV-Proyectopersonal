'use client'

import { useTranslations } from "../hooks/use-translations"

export function SoftSkills() {
  const { t } = useTranslations()

  const skills = [
    'problemSolving',
    'communication',
    'teamwork',
    'adaptability',
    'timeManagement'
  ]

  return (
    <div className="border border-gray-800 p-4 bg-old-paper-light">
      <h2 className="text-center text-xl font-bold mb-4 newspaper-heading font-playfair">
        {t('qualities.title')}
      </h2>
      <ul className="space-y-2 text-sm">
        {skills.map((skill) => (
          <li key={skill} className="flex items-start">
            <span className="inline-block w-4 h-4 mr-2 text-center leading-4">
              ✓
            </span>
            <span>{t(`qualities.items.${skill}`)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-gray-300 text-xs italic text-center">
        {t('qualities.quote')}
      </div>
    </div>
  )
} 