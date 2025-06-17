// src/app/api/weather/forecast/route.ts
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
  const days = searchParams.get("days") || "1"; // Default to 1 day forecast

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
    const dailyForecasts = forecast.forecastday.map((day: any) => ({
      date: day.date,
      maxTempC: day.day.maxtemp_c,
      minTempC: day.day.mintemp_c,
      avgHumidity: day.day.avghumidity,
      conditionText: day.day.condition.text,
      conditionIcon: day.day.condition.icon,
      uvIndex: day.day.uv,
    }));

    return NextResponse.json({
      locationName: loc.name,
      country: loc.country,
      forecast: dailyForecasts,
    });
  } catch (error) {
    console.error("Error fetching forecast weather:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
