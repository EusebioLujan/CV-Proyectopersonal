'use client'

import { useState, useEffect } from 'react'
import { getWeatherData, getWeatherIcon } from '../services/weather-service'
import { useGeolocation } from './use-geolocation'
import { useLanguage } from '../contexts/language-context'
import { useTranslations } from './use-translations'

export function useHeaderWeather() {
  const [weather, setWeather] = useState<{
    temp: number
    description: string
    location: string
    icon: string
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { language } = useLanguage()
  const { t } = useTranslations()

  const { latitude, longitude, error: geoError, loading: geoLoading } = useGeolocation()

  useEffect(() => {
    async function fetchWeather() {
      try {
        if (geoError) {
          setError(geoError)
          setLoading(false)
          return
        }

        if (geoLoading) {
          return
        }

        if (!latitude || !longitude) {
          // Si no hay coordenadas, usar Montevideo como fallback
          const data = await getWeatherData(-34.8941, -56.0675, language)
          setWeather({
            temp: Math.round(data.current.temp_c),
            description: data.current.condition.text,
            location: data.location.name,
            icon: getWeatherIcon(data.current.condition.icon)
          })
        } else {
          const data = await getWeatherData(latitude, longitude, language)
          setWeather({
            temp: Math.round(data.current.temp_c),
            description: data.current.condition.text,
            location: data.location.name,
            icon: getWeatherIcon(data.current.condition.icon)
          })
        }
      } catch (err) {
        setError(t('weather.error'))
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [latitude, longitude, geoError, geoLoading, language, t])

  return { weather, loading: loading || geoLoading, error: error || geoError }
} 