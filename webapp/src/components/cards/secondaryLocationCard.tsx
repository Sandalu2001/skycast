"use client";

import { alpha, Stack, Typography } from "@mui/material";
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

export default function SecondaryLocationCard({
  temperature,
  location,
  wind,
  humidity,
}: DataCardProps) {
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

        <Stack>
          <Typography variant="h6" color="white">
            {location}
          </Typography>
          <Stack flexDirection={"row"} spacing={2}>
            <Typography
              variant="h4"
              color="white"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              {temperature}
            </Typography>
            <Typography variant="h6" color="white">
              0
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
