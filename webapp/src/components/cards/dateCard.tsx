"use client";

import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import FlashOnIcon from "@mui/icons-material/FlashOn";

export interface DataCardProps {
  imageURL: string;
  day: string;
  temperature: string;
  isToday: boolean;
}

export default function DateCard({
  imageURL,
  day,
  temperature,
  isToday,
}: DataCardProps) {
  return (
    <Box>
      <Stack
        sx={{
          borderRadius: 8,
          width: 160,
          background: (theme) =>
            isToday
              ? `linear-gradient(-45deg, ${theme.palette.primary.main}, ${alpha(
                  theme.palette.primary.main,
                  0.6
                )})`
              : `linear-gradient(-45deg, ${alpha(
                  theme.palette.primary.main,
                  0.1
                )}, ${theme.palette.common.white})`,
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
          p: 3,
          textAlign: "center",
        }}
      >
        <Stack spacing={1} alignItems="center">
          <Image
            src={"/images/" + imageURL + ".png"}
            width={198}
            height={110}
            alt="icon"
          />
          <Typography variant="h4" color={isToday ? "white" : "black"}>
            {day}
          </Typography>
          <Typography variant="h5" color={isToday ? "white" : "black"}>
            {temperature}
            <sup>o</sup>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
