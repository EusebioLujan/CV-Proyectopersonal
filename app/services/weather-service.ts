"use client";

// La API key debería estar en un archivo .env.local
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = "http://api.weatherapi.com/v1";

export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: Array<{
      day: {
        maxtemp_c: number;
        mintemp_c: number;
      };
    }>;
  };
}

export async function getWeatherData(
  lat: number,
  lon: number,
  lang: string = "es"
): Promise<WeatherData> {
  try {
    if (!API_KEY) {
      throw new Error("API key no configurada");
    }

    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=1&lang=${lang}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error?.message || "Error al obtener datos del clima"
      );
    }

    const data = await response.json();
    console.log("Weather API Response:", data); // Agregado para depuración
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

export function getWeatherIcon(iconPath: string): string {
  return iconPath.startsWith("//") ? `https:${iconPath}` : iconPath;
}

// Función para convertir temperatura de Kelvin a Celsius
export function kelvinToCelsius(kelvin: number): number {
  return Math.round(kelvin - 273.15);
}
