"use client";

import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import FlashOnIcon from "@mui/icons-material/FlashOn";

export interface DataCardProps {
  imageURL: string;
  day: string;
  temperature: string;
  condition: string;
  isClicked: boolean;
}

export default function DateCard({
  imageURL,
  day,
  temperature,
  condition,
  isClicked,
}: DataCardProps) {
  return (
    <Tooltip arrow title={<Typography variant="h6">{condition}</Typography>}>
      <Stack
        sx={{
          borderRadius: 8,
          background: (theme) =>
            isClicked
              ? `linear-gradient(-45deg, ${theme.palette.primary.main}, ${alpha(
                  theme.palette.primary.main,
                  0.8
                )})`
              : `linear-gradient(-45deg, ${alpha(
                  theme.palette.info.main,
                  0.8
                )}, ${theme.palette.info.main})`,
          boxShadow: `
            inset 0px 5px 15px rgba(0, 0, 0, 0.08),
            0px 15px 30px rgba(0, 0, 0, 0.10)
          `,
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.01)",
            boxShadow: `
              inset 0px 5px 15px rgba(0, 0, 0, 0.08),
              0px 25px 50px rgba(0, 0, 0, 0.15)
            `,
          },
          px: 2,
          py: 2,
          textAlign: "center",
        }}
      >
        <Stack spacing={0} alignItems="center">
          <Image
            src={"/images/" + imageURL + ".png"}
            width={85}
            height={85}
            alt="icon"
          />
          <Typography
            variant="h4"
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark"
                  ? "white"
                  : isClicked
                  ? "white"
                  : "black",
            }}
          >
            {day}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark"
                  ? "white"
                  : isClicked
                  ? "white"
                  : "black",
            }}
          >
            {temperature}
            <sup>o</sup>
          </Typography>
        </Stack>
      </Stack>
    </Tooltip>
  );
}
