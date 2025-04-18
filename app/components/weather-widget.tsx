'use client'

import { Cloud, Droplets, Wind } from "lucide-react"
import { useEffect, useState } from "react"
import { WeatherData, getWeatherData, getWeatherIcon } from "../services/weather-service"
import { useGeolocation } from "../hooks/use-geolocation"
import { useLanguage } from "../contexts/language-context"
import { useTranslations } from "../hooks/use-translations"

export function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
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
          setWeatherData(data)
        } else {
          const data = await getWeatherData(latitude, longitude, language)
          setWeatherData(data)
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

  if (loading || geoLoading) {
    return (
      <div className="bg-old-paper p-4 border border-gray-800">
        <h3 className="text-lg font-bold mb-2">{t('weather.title')}</h3>
        <p>{t('weather.loading')}</p>
      </div>
    )
  }

  if (error || geoError || !weatherData) {
    return (
      <div className="bg-old-paper p-4 border border-gray-800">
        <h3 className="text-lg font-bold mb-2">{t('weather.title')}</h3>
        <p>{error || geoError || t('weather.errorGeneric')}</p>
      </div>
    )
  }

  const currentWeather = weatherData.current
  const today = weatherData.forecast.forecastday[0]

  return (
    <div className="bg-old-paper p-4 border border-gray-800">
      <h3 className="text-lg font-bold mb-2">{t('weather.in')} {weatherData.location.name}</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={getWeatherIcon(currentWeather.condition.icon)} 
              alt={currentWeather.condition.text}
              className="w-12 h-12"
            />
            <div>
              <p className="font-bold">{Math.round(currentWeather.temp_c)}°C</p>
              <p className="text-sm capitalize">{currentWeather.condition.text}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <Cloud className="h-4 w-4 mr-1" />
            <span>{t('weather.maxTemp')}: {Math.round(today.day.maxtemp_c)}°C</span>
          </div>
          <div className="flex items-center">
            <Droplets className="h-4 w-4 mr-1" />
            <span>{t('weather.humidity')}: {currentWeather.humidity}%</span>
          </div>
          <div className="flex items-center">
            <Wind className="h-4 w-4 mr-1" />
            <span>{t('weather.wind')}: {Math.round(currentWeather.wind_kph)} {t('weather.kmh')}</span>
          </div>
        </div>
      </div>
    </div>
  )
} 