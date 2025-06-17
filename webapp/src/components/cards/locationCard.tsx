"use client";

import { alpha, Box, CircularProgress, Stack, Typography } from "@mui/material";
import Image from "next/image";
import WindPowerIcon from "@mui/icons-material/WindPower";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { CurrentWeatherData, fetchCurrentWeather } from "@/lib/weather";
import { Suspense, useEffect, useState } from "react";

export interface DataCardProps {
  imageURL: string;
  day: string;
  temperature: string;
  location: string;
  wind: string;
  humidity: string;
}

export function LocationCard({
  imageURL,
  day,
  temperature,
  location,
  wind,
  humidity,
}: DataCardProps) {
  const [fetchedLocationData, setFetchedLocationData] =
    useState<CurrentWeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCurrentWeather(location);
        setFetchedLocationData(data);
      } catch (err: any) {
        setError(err.message);
        setFetchedLocationData(null);
      } finally {
        setLoading(false);
      }
    };

    getData();
    console.log("Hello");
  }, [location]);

  if (loading) {
    return (
      <Box
        sx={{
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">Loading {location}...</Typography>
      </Box>
    );
  }

  if (error || !fetchedLocationData) {
    return (
      <Box
        sx={{
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "error.main",
        }}
      >
        <Typography variant="body2">Error: {error || "No data"}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Stack
        sx={{
          borderRadius: 6,
          background: (theme) =>
            `linear-gradient(-45deg, ${theme.palette.primary.main}, ${alpha(
              theme.palette.primary.main,
              0.6
            )})`,
          boxShadow: `
        inset 0px 5px 15px rgba(0, 0, 0, 0.08), 
        0px 15px 30px rgba(0, 0, 0, 0.15) 
      `,
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.01)",
            boxShadow: `
          inset 0px 5px 15px rgba(0, 0, 0, 0.08),
          0px 25px 50px rgba(0, 0, 0, 0.2) 
        `,
          },
          px: 1,
          py: 3,
          textAlign: "center",
        }}
      >
        <Stack spacing={1} alignItems="center">
          <Image
            src={"/images/" + imageURL + ".png"}
            width={216}
            height={120}
            alt="icon"
          />
          <Typography variant="h6" color={"white"}>
            {fetchedLocationData.locationName}, {fetchedLocationData.country}
          </Typography>
          <Typography variant="h1" color={"white"}>
            {fetchedLocationData.temperatureC}°C
            <sup>o</sup>
          </Typography>
          <Stack gap={2}>
            <Stack
              flexDirection={"row"}
              alignItems="center"
              gap={5}
              sx={{ color: "white" }}
            >
              <Stack flexDirection={"row"} alignItems="center" gap={1}>
                <WindPowerIcon />
                <Typography variant="body1">Wind</Typography>
              </Stack>
              <Typography variant="body1">{wind}</Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              alignItems="center"
              gap={5}
              sx={{ color: "white" }}
            >
              <Stack flexDirection={"row"} alignItems="center" gap={1}>
                <WaterDropIcon />
                <Typography variant="body1">Hum</Typography>
              </Stack>
              <Typography variant="body1">
                {fetchedLocationData.humidity}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default function LocationCardAsync({
  imageURL,
  day,
  temperature,
  location,
  wind,
  humidity,
}: DataCardProps) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LocationCard
        imageURL={imageURL}
        day={day}
        temperature={temperature}
        location={location}
        wind={wind}
        humidity={humidity}
      />
    </Suspense>
  );
}
