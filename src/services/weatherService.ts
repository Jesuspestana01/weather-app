import type { GeoLocation, WeatherData } from "../types/weather"

export const getWeatherByCity = async(city: string) => {
try {
    console.log(import.meta.env.KEY)
    const geoResponse = await fetch(`${import.meta.env.VITE_OPENWEATHER_URL}/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_KEY}`)
    const geoData: GeoLocation[] = await geoResponse.json()

    if (!geoData || geoData.length === 0) {
        throw new Error("City not found")
    }

    const {lat, lon, name, country} = geoData[0]

    const weatherResponse = await fetch(`${import.meta.env.VITE_OPENWEATHER_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_KEY}`)
    const weatherData: WeatherData = await weatherResponse.json()

    return {
        location: {name, country},
        weather: weatherData
    }
} catch (error) {
    console.error("Service error:", error)
    throw error
}
}