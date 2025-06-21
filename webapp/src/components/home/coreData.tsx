"use client";

import {
  alpha,
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import StyledContainer from "../common/styleComponent";
import { Sunny } from "@mui/icons-material";
import {
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
  useGaugeState,
} from "@mui/x-charts";
import { ForecastData } from "@/lib/weather";

export interface DataCardProps {
  imageURL: string;
  day: string;
  temperature: string;
  location: string;
  wind: string;
  humidity: string;
}

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <foreignObject x={target.x - 12} y={target.y - 14} width={24} height={24}>
        <Tooltip
          title={<Typography variant="body2">10.00 AM</Typography>}
          arrow
        >
          <Sunny
            sx={{
              width: 24,
              height: 24,
              color: (theme) => theme.palette.warning.main,
            }}
          />
        </Tooltip>
      </foreignObject>
    </g>
  );
}

function StartPointer() {
  const { startAngle, outerRadius, cx, cy } = useGaugeState();
  const theme = useTheme();

  const angleRad = startAngle;

  const target = {
    x: cx + outerRadius * Math.sin(angleRad),
    y: cy - outerRadius * Math.cos(angleRad),
  };

  return (
    <g>
      <foreignObject x={target.x - 20} y={target.y} width={70} height={20}>
        <Typography variant="body2">6.00AM</Typography>
      </foreignObject>
    </g>
  );
}

function EndPointer() {
  const { endAngle, outerRadius, cx, cy } = useGaugeState();
  const theme = useTheme();

  const angleRad = endAngle;

  const target = {
    x: cx + outerRadius * Math.sin(angleRad),
    y: cy - outerRadius * Math.cos(angleRad),
  };

  return (
    <g>
      <foreignObject x={target.x - 35} y={target.y} width={50} height={20}>
        <Typography variant="body2" position={"absolute"}>
          5.58 PM
        </Typography>
      </foreignObject>
    </g>
  );
}

export interface CoreDataSectionProps {
  fetchedWeatherForecastData: ForecastData | undefined;
  isLoading: boolean;
}

export default function CoreDataSection({
  fetchedWeatherForecastData,
  isLoading,
}: CoreDataSectionProps) {
  if (isLoading) {
    return (
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
    );
  }

  if (!isLoading && !fetchedWeatherForecastData) {
    return (
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
    );
  }

  return (
    <Grid container height={"100%"} spacing={3}>
      <Grid size={4} height={"100%"} sx={{ borderRadius: 6, px: -3 }}>
        <StyledContainer sx={{ gap: 1, p: 2, height: "100%" }}>
          <Typography
            variant="h5"
            sx={{
              pl: 2,
              pt: 2,
              fontWeight: 700,
            }}
          >
            Daily Forecast
          </Typography>

          <Stack sx={{ height: "100%", p: 2, pt: 1, overflowY: "auto" }}>
            {fetchedWeatherForecastData?.forecast[0].hour.map(
              (value, index) => (
                <Stack>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" sx={{ maxWidth: 50 }}>
                      {new Date(value.time).getHours() > 11
                        ? new Date(value.time).getHours() - 12 + ` PM`
                        : new Date(value.time).getHours() + ` AM`}
                    </Typography>
                    <Stack>
                      <Image
                        src={"/images/" + value.conditionIconCode + ".png"}
                        width={30}
                        height={30}
                        alt="icon"
                      />
                    </Stack>
                    <Typography
                      variant="h6"
                      color={"black"}
                      sx={{ maxWidth: 70 }}
                    >
                      {value.tempC}
                      <sup>o</sup>C
                    </Typography>
                  </Stack>
                  <Divider orientation="horizontal" flexItem />
                </Stack>
              )
            )}
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Typography
                variant="body1"
                textAlign={"left"}
                sx={{
                  position: "absolute",
                  fontWeight: 700,
                  top: 0,
                  mt: 3,
                }}
              >
                Sunset & Sunshine
              </Typography>
              <GaugeContainer
                sx={(theme) => ({
                  position: "absolute",
                  mt: 3,
                })}
                width={130}
                height={130}
                startAngle={-90}
                endAngle={90}
                value={30}
                innerRadius="110%"
                outerRadius="104%"
              >
                <GaugeReferenceArc strokeDasharray={"3,3"} />
                <GaugeValueArc />
                <StartPointer />
                <GaugePointer />
                <EndPointer />
              </GaugeContainer>
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
