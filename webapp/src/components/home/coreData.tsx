"use client";

import { alpha, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StyledContainer from "../common/styleComponent";
import { DailyForecast, ForecastData } from "@/lib/weather";

export interface DataCardProps {
  imageURL: string;
  day: string;
  temperature: string;
  location: string;
  wind: string;
  humidity: string;
}

export interface CoreDataSectionProps {
  fetchedWeatherForecastData: ForecastData | undefined;
  isLoading: boolean;
  selectedDate: string;
}

export default function CoreDataSection({
  fetchedWeatherForecastData,
  isLoading,
  selectedDate,
}: CoreDataSectionProps) {
  const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    timeZone: "Asia/Colombo",
  }).format(new Date(selectedDate));

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
              <Typography
                variant="h5"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black",
                }}
              >
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
              color: (theme) =>
                theme.palette.mode === "dark" ? "white" : "black",
            }}
          >
            {selectedDate === new Date().toISOString().split("T")[0]
              ? `Today Forecast`
              : formatted + `  Forecast`}
          </Typography>

          <Stack sx={{ height: "100%", p: 2, pt: 1, overflowY: "auto" }}>
            {fetchedWeatherForecastData?.forecast
              .filter(
                (dailyForecast: DailyForecast) =>
                  dailyForecast.date === selectedDate
              )
              .flatMap((dailyForecast: DailyForecast) => dailyForecast.hour)
              .map((value, index: number) => (
                <Stack key={index}>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        maxWidth: 50,
                        color: (theme) =>
                          theme.palette.mode === "dark" ? "white" : "black",
                      }}
                    >
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
                      sx={{
                        maxWidth: 70,
                        color: (theme) =>
                          theme.palette.mode === "dark" ? "white" : "black",
                      }}
                    >
                      {value.tempC}
                      <sup>o</sup>C
                    </Typography>
                  </Stack>
                  <Divider orientation="horizontal" flexItem />
                </Stack>
              ))}
          </Stack>
        </StyledContainer>
      </Grid>
      <Grid container size={8} spacing={2} height={"100%"} direction="column">
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            pl: 2,
            color: (theme) =>
              theme.palette.mode === "dark" ? "white" : "black",
          }}
        >
          {selectedDate === new Date().toISOString().split("T")[0]
            ? `Today's Highlight`
            : formatted + ` s Highlight`}
        </Typography>

        {fetchedWeatherForecastData?.forecast
          .filter(
            (dailyForecast: DailyForecast) =>
              dailyForecast.date === selectedDate
          )
          .map((dailyForecast: DailyForecast, index: number) => (
            <>
              <Grid key={index} container sx={{ flexGrow: 3 }} spacing={2}>
                <Grid size={4}>
                  <StyledContainer
                    sx={{
                      p: 0,
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      alignContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body1"
                      textAlign={"left"}
                      sx={{
                        fontWeight: 700,
                        top: 0,
                        color: (theme) =>
                          theme.palette.mode === "dark" ? "white" : "black",
                      }}
                    >
                      Wind
                    </Typography>
                    <Image
                      src={"/images/wind.png"}
                      width={100}
                      height={100}
                      alt="wind phase"
                    />
                    <Typography
                      variant="body1"
                      textAlign={"left"}
                      sx={{
                        top: 0,
                        color: (theme) =>
                          theme.palette.mode === "dark" ? "white" : "black",
                      }}
                    >
                      {dailyForecast.windSpeed} {" km/h"}
                    </Typography>
                  </StyledContainer>
                </Grid>

                <Grid size={4}>
                  <StyledContainer
                    sx={{
                      p: 0,
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      alignContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body1"
                      textAlign={"left"}
                      sx={{
                        fontWeight: 700,
                        top: 0,
                        color: (theme) =>
                          theme.palette.mode === "dark" ? "white" : "black",
                      }}
                    >
                      Moon Phase
                    </Typography>
                    <Image
                      src={"/images/moon.png"}
                      width={100}
                      height={100}
                      alt="moon phase"
                    />
                    <Stack
                      flexDirection={"row"}
                      justifyContent={"space-between"}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          top: 0,
                          color: (theme) =>
                            theme.palette.mode === "dark" ? "white" : "black",
                        }}
                      >
                        {dailyForecast.astro.moonrise}{" "}
                      </Typography>
                    </Stack>
                  </StyledContainer>
                </Grid>
                <Grid size={4}>
                  <StyledContainer
                    sx={{
                      p: 0,
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      alignContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body1"
                      textAlign={"left"}
                      sx={{
                        fontWeight: 700,
                        top: 0,
                        color: (theme) =>
                          theme.palette.mode === "dark" ? "white" : "black",
                      }}
                    >
                      Sunset & Sunshine
                    </Typography>
                    <Image
                      src={"/images/sunny.png"}
                      width={100}
                      height={100}
                      alt="sunset"
                    />
                    <Stack
                      justifyContent={"space-between"}
                      flexDirection={"row"}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: (theme) =>
                            theme.palette.mode === "dark" ? "white" : "black",
                        }}
                      >
                        Sunrise :
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: (theme) =>
                            theme.palette.mode === "dark" ? "white" : "black",
                        }}
                      >
                        {dailyForecast.astro.sunrise}
                      </Typography>
                    </Stack>

                    <Stack
                      justifyContent={"space-between"}
                      flexDirection={"row"}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: (theme) =>
                            theme.palette.mode === "dark" ? "white" : "black",
                        }}
                      >
                        Sunrise :
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: (theme) =>
                            theme.palette.mode === "dark" ? "white" : "black",
                        }}
                      >
                        {dailyForecast.astro.sunset}
                      </Typography>
                    </Stack>
                  </StyledContainer>
                </Grid>
              </Grid>
              <Grid container sx={{ flexGrow: 6 }} spacing={2}>
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
            </>
          ))}
      </Grid>
    </Grid>
  );
}
