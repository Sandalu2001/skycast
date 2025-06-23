export interface CurrentWeatherData {
  temperatureC: number;
  feelsLikeC: number;
  conditionText: string;
  conditionIconCode: string;
  humidity: number;
  windSpeedKph: number;
  uvIndex: number;
  locationName: string;
  country: string;
  localtime: string;
}

export interface DailyForecast {
  date: string;
  maxTempC: number;
  minTempC: number;
  avgHumidity: number;
  conditionText: string;
  conditionIconCode: string;
  windSpeed: number;
  chanceOfRain: number;
  uvIndex: number;
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
  };
  hour: {
    time: string;
    tempC: number;
    conditionText: string;
    conditionIconCode: string;
    windSpeedKph: number;
    humidity: number;
  }[];
}

export interface ForecastData {
  locationName: string;
  country: string;
  forecast: DailyForecast[];
}

export interface LocationSearchResult {
  id: number;
  name: string;
  region: string;
  country: string;
}

export async function fetchCurrentWeather(
  location: string
): Promise<CurrentWeatherData> {
  const response = await fetch(
    `/api/weather/current?location=${encodeURIComponent(location)}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch current weather data.");
  }
  return response.json();
}

export async function fetchWeatherForecast(
  location: string,
  days: number = 1
): Promise<ForecastData> {
  const response = await fetch(
    `/api/weather/forecast?location=${encodeURIComponent(
      location
    )}&days=${days}`
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch forecast data.");
  }
  return response.json();
}

export async function searchLocations(
  query: string
): Promise<LocationSearchResult[]> {
  const response = await fetch(
    `/api/weather/search?q=${encodeURIComponent(query)}`
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to search locations.");
  }
  return response.json();
}
