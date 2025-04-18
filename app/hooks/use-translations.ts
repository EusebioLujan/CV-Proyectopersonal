'use client'

import { useLanguage } from '../contexts/language-context'
import { useMemo } from 'react'

// Importar los archivos JSON de traducciones
import enTranslations from '../i18n/en.json'
import esTranslations from '../i18n/es.json'

// Tipo para las traducciones
type TranslationKey = string

// Función para obtener una traducción anidada usando una ruta de puntos
function getNestedTranslation(obj: any, path: string): string {
  return path.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : undefined
  }, obj)
}

export function useTranslations() {
  const { language } = useLanguage()

  // Seleccionar el archivo de traducciones según el idioma actual
  const translations = useMemo(() => {
    return language === 'en' ? enTranslations : esTranslations
  }, [language])

  // Función para obtener una traducción
  const t = (key: TranslationKey): string => {
    const translation = getNestedTranslation(translations, key)
    return translation || key
  }

  return { t, language }
} 