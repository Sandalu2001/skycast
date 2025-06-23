"use client";

import { alpha, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import WindPowerIcon from "@mui/icons-material/WindPower";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { CurrentWeatherData } from "@/lib/weather";
import StyledContainer from "../common/styleComponent";

export interface DataCardProps {
  fetchedLocationData: CurrentWeatherData | undefined;
  isLoading: boolean;
  selectedDate: string;
}

export default function LocationCard({
  fetchedLocationData,
  isLoading,
}: DataCardProps) {
  console.log(fetchedLocationData, isLoading);
  if (isLoading) {
    return (
      <StyledContainer
        sx={{
          background: (theme) =>
            `linear-gradient(-45deg, ${theme.palette.primary.main}, ${alpha(
              theme.palette.primary.main,
              0.6
            )})`,
          boxShadow: `
      inset 0px 5px 15px rgba(0, 0, 0, 0.08), 
      0px 15px 30px rgba(0, 0, 0, 0.15) 
    `,
          minHeight: 370,
        }}
      >
        <Stack spacing={1} alignItems="center">
          <Skeleton variant="circular" width={120} height={120} />

          <Typography variant="h6" color={"white"}>
            <Skeleton width={100} />
          </Typography>
          <Typography variant="h1" color={"white"}>
            <Skeleton width={140} />
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
                <Skeleton width={50} />
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
                <Skeleton width={50} />
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </StyledContainer>
    );
  }

  if (!isLoading && !fetchedLocationData) {
    return (
      <StyledContainer
        sx={{
          background: (theme) =>
            `linear-gradient(-45deg, ${theme.palette.primary.main}, ${alpha(
              theme.palette.primary.main,
              0.6
            )})`,
          boxShadow: `
        inset 0px 5px 15px rgba(0, 0, 0, 0.08), 
        0px 15px 30px rgba(0, 0, 0, 0.15) 
      `,
          minHeight: 370,
        }}
      >
        <Stack spacing={1} alignItems="center">
          <Image
            src={"/images/location-not-found.png"}
            width={150}
            height={150}
            alt="icon"
          />

          <Typography variant="h6" color={"white"}>
            Location not found
          </Typography>
        </Stack>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer
      sx={{
        background: (theme) =>
          `linear-gradient(-45deg, ${theme.palette.primary.main}, ${alpha(
            theme.palette.primary.main,
            0.6
          )})`,
        boxShadow: `
        inset 0px 5px 15px rgba(0, 0, 0, 0.08),
        0px 15px 30px rgba(0, 0, 0, 0.15)
      `,
        minHeight: 370,
      }}
    >
      <Stack spacing={1} alignItems="center">
        <Image
          src={"/images/" + fetchedLocationData?.conditionIconCode + ".png"}
          width={120}
          height={120}
          alt="icon"
        />

        <Typography variant="h6" color={"white"}>
          {fetchedLocationData?.locationName +
            " " +
            fetchedLocationData?.country}
        </Typography>
        <Typography variant="h1" color={"white"}>
          {fetchedLocationData?.temperatureC + "°C"}
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
              {fetchedLocationData?.windSpeedKph + " km/h"}
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
              {fetchedLocationData?.humidity}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </StyledContainer>
  );
}
