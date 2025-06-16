"use client";

import {
  alpha,
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import WindPowerIcon from "@mui/icons-material/WindPower";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import StyledContainer from "../common/styleComponent";
import SecondaryLocationCard from "../cards/secondaryLocationCard";
import DayForecastCard from "../cards/dayForecastCard";
import { Today } from "@mui/icons-material";

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
    <Grid container height={"100%"} spacing={3}>
      {" "}
      {/* Added p for padding */}
      <Grid size={4} height={"100%"} sx={{ borderRadius: 6, px: -3 }}>
        <StyledContainer sx={{ gap: 1, p: 2, height: "100%" }}>
          <Typography
            variant="h5"
            textAlign={"left"}
            sx={{
              pl: 2,
              pt: 2,
              fontWeight: 700,
            }}
          >
            Daily Forecast
          </Typography>
          <Stack sx={{ height: "100%", p: 2, pt: 1, overflowY: "auto" }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <Stack key={index}>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h5">
                    {new Date().getHours() > 12
                      ? new Date().getHours() - 12 + index + ` PM`
                      : new Date().getHours() + index + ` AM`}
                  </Typography>
                  <Stack>
                    <Image
                      src={"/images/" + "sunny" + ".png"}
                      width={54}
                      height={30}
                      alt="icon"
                    />
                    <Typography
                      variant="body2"
                      color={"primary"}
                      sx={{ fontWeight: 600 }}
                    >
                      54 %
                    </Typography>
                  </Stack>
                  <Typography variant="h5" color={"black"}>
                    26
                    <sup>o</sup>
                  </Typography>
                </Stack>
                <Divider orientation="horizontal" flexItem />
              </Stack>
            ))}
          </Stack>
        </StyledContainer>
      </Grid>
      <Grid container size={8} spacing={2} height={"100%"} direction="column">
        <Typography variant="h5" sx={{ fontWeight: 700, pl: 2 }}>
          Today's Highlight
        </Typography>
        <Grid container sx={{ flexGrow: 3 }}>
          <Grid size={4}>
            <StyledContainer
              sx={{
                height: "100%",
              }}
            >
              <Box></Box>
            </StyledContainer>
          </Grid>

          <Grid size={4}>
            <StyledContainer
              sx={{
                height: "100%",
              }}
            >
              <Box></Box>
            </StyledContainer>
          </Grid>
          <Grid size={4}>
            <StyledContainer
              sx={{
                height: "100%",
              }}
            >
              <Box></Box>
            </StyledContainer>
          </Grid>
        </Grid>
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid size={4}>
            <StyledContainer
              sx={{
                background: (theme) =>
                  `linear-gradient(-45deg, ${
                    theme.palette.primary.main
                  }, ${alpha(theme.palette.primary.main, 0.6)})`,
                height: "100%",
              }}
            >
              <Box></Box>
            </StyledContainer>
          </Grid>

          <Grid size={4}>
            <StyledContainer
              sx={{
                background: (theme) =>
                  `linear-gradient(-45deg, ${
                    theme.palette.primary.main
                  }, ${alpha(theme.palette.primary.main, 0.6)})`,
                height: "100%",
              }}
            >
              <Box></Box>
            </StyledContainer>
          </Grid>
          <Grid size={4}>
            <StyledContainer
              sx={{
                background: (theme) =>
                  `linear-gradient(-45deg, ${
                    theme.palette.primary.main
                  }, ${alpha(theme.palette.primary.main, 0.6)})`,
                height: "100%",
              }}
            >
              <Box></Box>
            </StyledContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
