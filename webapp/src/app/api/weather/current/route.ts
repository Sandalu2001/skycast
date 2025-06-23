"use server";

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

  try {
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`
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
        { error: data.error?.message || "Failed to fetch current weather." },
        { status: response.status }
      );
    }

    const { current, location: loc } = data;
    console.log(data);
    return NextResponse.json({
      temperatureC: current.temp_c,
      feelsLikeC: current.feelslike_c,
      conditionText: current.condition.text,
      conditionIcon: current.condition.icon,
      humidity: current.humidity,
      windSpeedKph: current.wind_kph,
      uvIndex: current.uv,
      locationName: loc.name,
      country: loc.country,
      localtime: loc.localtime,
    });
  } catch (error) {
    console.error("Error fetching current weather:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
