'use client'

import { useTranslations } from "../hooks/use-translations"

export function TechSkills() {
  const { t } = useTranslations()

  const skills = [
    { key: 'javascript', level: 90 },
    { key: 'react', level: 85 },
    { key: 'nodejs', level: 80 },
    { key: 'htmlcss', level: 95 },
    { key: 'typescript', level: 75 },
    { key: 'postgresql', level: 70 }
  ]

  return (
    <div className="border border-gray-800 p-4 bg-old-paper-light">
      <h2 className="text-center text-2xl font-bold mb-4 newspaper-heading font-playfair">
        {t('expertise.title')}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {skills.map((skill) => (
          <div key={skill.key} className="skill-card">
            <div className="skill-icon">
              <span className="text-2xl">&#9881;</span>
            </div>
            <div className="skill-name">{t(`expertise.skills.${skill.key}`)}</div>
            <div className="skill-level">
              <div className="h-1 bg-gray-300 w-full mt-1">
                <div
                  className="h-full bg-gray-800"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 