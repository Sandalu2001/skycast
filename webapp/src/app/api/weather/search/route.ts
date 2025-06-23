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
  const query = searchParams.get("q");
  if (!query) {
    return NextResponse.json(
      { error: "Search query parameter (q) is required." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${BASE_URL}/search.json?key=${API_KEY}&q=${query}`
    );
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "Failed to search locations." },
        { status: response.status }
      );
    }
    const locations = (
      data as Array<{
        id: string;
        name: string;
        region: string;
        country: string;
      }>
    ).map((loc) => ({
      id: loc.id,
      name: loc.name,
      region: loc.region,
      country: loc.country,
    }));

    return NextResponse.json(locations);
  } catch (error) {
    console.error("Error searching locations:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
