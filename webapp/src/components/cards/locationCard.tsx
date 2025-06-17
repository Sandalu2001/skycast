"use client";

import {
  alpha,
  Box,
  CircularProgress,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
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
    useState<CurrentWeatherData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCurrentWeather("Colombo");
        setFetchedLocationData(data);
      } catch (err: any) {
        setError(err.message);
        setFetchedLocationData(undefined);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [location]);

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
          minHeight: 350,
        }}
      >
        {(error || !fetchedLocationData) && !loading ? (
          <Typography variant="h1">Error</Typography>
        ) : (
          <Stack spacing={1} alignItems="center">
            {loading ? (
              <Skeleton variant="circular" width={100} height={100} />
            ) : (
              <Image
                src={"/images/" + imageURL + ".png"}
                width={216}
                height={120}
                alt="icon"
              />
            )}
            <Typography variant="h6" color={"white"}>
              {loading ? (
                <Skeleton variant="text" width={200} />
              ) : (
                fetchedLocationData?.locationName +
                " " +
                fetchedLocationData?.country
              )}
            </Typography>
            <Typography variant="h1" color={"white"}>
              {loading ? (
                <Skeleton variant="text" width={200} />
              ) : (
                fetchedLocationData?.temperatureC + "°C"
              )}
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
                <Typography variant="body1">
                  {loading ? (
                    <Skeleton variant="text" width={50} />
                  ) : (
                    fetchedLocationData?.windSpeedKph + " km/h"
                  )}
                </Typography>
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
                  {loading ? (
                    <Skeleton variant="text" width={50} />
                  ) : (
                    fetchedLocationData?.humidity
                  )}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        )}
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
