"use client";

import { alpha, Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import WindPowerIcon from "@mui/icons-material/WindPower";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import StyledContainer from "../common/styleComponent";
import SecondaryLocationCard from "../cards/secondaryLocationCard";
import { Sunny } from "@mui/icons-material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export interface DataCardProps {
  imageURL: string;
  day: string;
  temperature: string;
  location: string;
  wind: string;
  humidity: string;
}

export default function MetaDataSection() {
  return (
    <Stack sx={{ position: "relative" }}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stack
          gap={1}
          sx={{ width: "100%" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignContent={"space-between"}
        >
          <Typography
            variant="h3"
            color="primary"
            sx={{
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Sunny fontSize="large" />
            {`Good morning, Sandalu!`}
          </Typography>

          <Stack gap={2}>
            <StyledContainer
              sx={{
                p: 0.3,
                flexDirection: "row",
                gap: 1,
              }}
              alignSelf={"end"}
            >
              <IconButton
                sx={{
                  color: "white",
                  background: (theme) => theme.palette.primary.main,
                  ":hover": {
                    background: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                <LightModeIcon />
              </IconButton>
              <IconButton>
                <DarkModeIcon />
              </IconButton>
            </StyledContainer>

            <Typography
              variant="h5"
              color="primary.dark"
              sx={{ fontWeight: 600 }}
            >
              Wednesday,14 Jun 2025
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
