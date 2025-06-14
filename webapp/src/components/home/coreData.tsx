"use client";

import { alpha, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import WindPowerIcon from "@mui/icons-material/WindPower";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import StyledContainer from "../common/styleComponent";
import SecondaryLocationCard from "../cards/secondaryLocationCard";

export interface DataCardProps {
  imageURL: string;
  day: string;
  temperature: string;
  location: string;
  wind: string;
  humidity: string;
}

export default function CoreDataSection() {
  return (
    <Stack
      flexDirection={"row"}
      alignContent={"space-between"}
      justifyContent={"space-between"}
    >
      <StyledContainer sx={{ minHeight: 300, p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Current Weather in Colombo
        </Typography>
        <Typography variant="body1">Temperature: 28°C</Typography>
        <Typography variant="body1">Humidity: 75%</Typography>
      </StyledContainer>
      <StyledContainer sx={{ minHeight: 300, p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Current Weather in Colombo
        </Typography>
        <Typography variant="body1">Temperature: 28°C</Typography>
        <Typography variant="body1">Humidity: 75%</Typography>
      </StyledContainer>

      <StyledContainer sx={{ minHeight: 300, p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Current Weather in Colombo
        </Typography>
        <Typography variant="body1">Temperature: 28°C</Typography>
        <Typography variant="body1">Humidity: 75%</Typography>
      </StyledContainer>
    </Stack>
  );
}
