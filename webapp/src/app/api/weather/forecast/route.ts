import { DailyForecast } from "@/lib/weather";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = "http://api.weatherapi.com/v1";

export async function GET(request: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "API key not configured." },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location") || "Colombo";
  const days = searchParams.get("days") || "1";

  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}`
    );
    const data = await response.json();

    if (!response.ok) {
      if (data.error && data.error.code === 1006) {
        return NextResponse.json(
          { error: data.error.message },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: data.error?.message || "Failed to fetch forecast weather." },
        { status: response.status }
      );
    }

    const { forecast, location: loc } = data;
    console.log(forecast);
    const dailyForecasts = forecast.forecastday.map(
      (day: {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          avghumidity: number;
          condition: { text: string; code: number };
          maxwind_kph: number;
          daily_chance_of_rain: number;
          uv: number;
        };
        astro: {
          sunrise: string;
          sunset: string;
          moonrise: string;
          moonset: string;
        };
        hour: Array<{
          time: string;
          temp_c: number;
          condition: { text: string; code: number };
          wind_kph: number;
          humidity: number;
        }>;
      }) => ({
        date: day.date,
        maxTempC: day.day.maxtemp_c,
        minTempC: day.day.mintemp_c,
        avgHumidity: day.day.avghumidity,
        conditionText: day.day.condition.text,
        conditionIconCode: day.day.condition.code,
        windSpeed: day.day.maxwind_kph,
        chanceOfRain: day.day.daily_chance_of_rain,
        uvIndex: day.day.uv,
        astro: {
          sunrise: day.astro.sunrise,
          sunset: day.astro.sunset,
          moonrise: day.astro.moonrise,
          moonset: day.astro.moonset,
        },
        hour: day.hour.map((hour) => ({
          time: hour.time,
          tempC: hour.temp_c,
          conditionText: hour.condition.text,
          conditionIconCode: hour.condition.code,
          windSpeedKph: hour.wind_kph,
          humidity: hour.humidity,
        })),
      })
    );

    return NextResponse.json({
      locationName: loc.name,
      country: loc.country,
      forecast: dailyForecasts as DailyForecast,
    });
  } catch (error) {
    console.error("Error fetching forecast weather:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
