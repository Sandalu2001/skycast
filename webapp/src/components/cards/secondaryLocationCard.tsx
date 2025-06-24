"use client";

import { alpha, Skeleton, Stack, Typography } from "@mui/material";
import WindPowerIcon from "@mui/icons-material/WindPower";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { CurrentWeatherData } from "@/lib/weather";
import Image from "next/image";

export interface SecondaryLocationCardProps {
  weatherData: CurrentWeatherData | null;
  isLoading?: boolean;
  error?: string | null;
  locationNameIfError?: string;
}

export default function SecondaryLocationCard({
  weatherData,
  isLoading,
  error,
  locationNameIfError,
}: SecondaryLocationCardProps) {
  if (isLoading) {
    return (
      <Stack
        sx={{
          borderRadius: 6,
          background: (theme) =>
            `linear-gradient(-45deg, ${theme.palette.secondary.main}, ${alpha(
              theme.palette.secondary.main,
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
          px: 2,
          py: 1,
          textAlign: "center",
          height: "100%",
          mx: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack gap={2} sx={{ justifyContent: "center" }}>
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
              <Skeleton width={20} />
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
              <Skeleton width={20} />
            </Typography>
          </Stack>
        </Stack>

        <Stack>
          <Typography variant="h6" color="white">
            <Skeleton variant="text" width={50} />
          </Typography>
          <Typography variant="h4" color="white">
            <Skeleton variant="text" width={50} />
          </Typography>
        </Stack>
      </Stack>
    );
  }

  if (error || !weatherData) {
    return (
      <Stack
        sx={{
          borderRadius: 6,
          background: (theme) =>
            `linear-gradient(-45deg, ${theme.palette.secondary.main}, ${alpha(
              theme.palette.secondary.main,
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
          px: 2,
          py: 1,
          textAlign: "center",
          height: "100%",
          mx: 3,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image width={100} height={100} src={"/images/error.png"} alt="error" />
        <Typography
          variant="h6"
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "white" : "black",
          }}
        >
          Could not load weather for {locationNameIfError || "this location"}.
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack
      sx={{
        borderRadius: 6,
        background: (theme) =>
          `linear-gradient(-45deg, ${theme.palette.secondary.main}, ${alpha(
            theme.palette.secondary.main,
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
        px: 2,
        py: 1,
        textAlign: "center",
        height: "100%",
        mx: 3,
      }}
    >
      <Stack spacing={1} flexDirection={"row"} justifyContent={"space-between"}>
        <Stack gap={2} sx={{ justifyContent: "center" }}>
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
            <Typography variant="body1">{weatherData?.windSpeedKph}</Typography>
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
            <Typography variant="body1">{weatherData?.humidity}</Typography>
          </Stack>
        </Stack>

        <Stack>
          <Typography variant="h6" color="white">
            {weatherData?.locationName}
          </Typography>
          <Stack
            flexDirection={"row"}
            spacing={2}
            justifyContent={"center"}
            alignContent={"center"}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Typography variant="h4" color="white">
              {weatherData?.temperatureC + "°C"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
