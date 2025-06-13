"use client";

import { alpha, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import WindPowerIcon from "@mui/icons-material/WindPower";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

export interface DataCardProps {
  imageURL: string;
  day: string;
  temperature: string;
  location: string;
  wind: string;
  humidity: string;
}

export default function LocationCard({
  imageURL,
  day,
  temperature,
  location,
  wind,
  humidity,
}: DataCardProps) {
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
            {day}
          </Typography>
          <Typography variant="h1" color={"white"}>
            {temperature}
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
              <Typography variant="body1">{humidity}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
