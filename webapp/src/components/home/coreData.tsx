"use client";

import { Divider, Grid, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StyledContainer from "../common/styleComponent";
import { DailyForecast, ForecastData } from "@/lib/weather";
import HightLightData from "./hightlightData";
import LoadingHightLights from "../common/loadingHighLights";

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

  if (!fetchedWeatherForecastData && !isLoading) {
    return (
      <StyledContainer
        sx={{
          p: 2,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image width={200} height={200} src={"/images/error.png"} alt="error" />
        <Typography
          variant="h4"
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "white" : "black",
          }}
        >
          No data available for {selectedDate}
        </Typography>
      </StyledContainer>
    );
  }

  return (
    <Grid container height={"100%"} spacing={3}>
      <Grid
        size={{ xs: 12, md: 4 }}
        height={"100%"}
        sx={{ borderRadius: 6, px: -3 }}
      >
        <StyledContainer sx={{ gap: 1, p: 2, height: "100%" }}>
          <Typography
            variant="h5"
            sx={{
              pl: 2,
              py: 2,
              fontWeight: 700,
              color: (theme) =>
                theme.palette.mode === "dark" ? "white" : "black",
            }}
          >
            {selectedDate === new Date().toISOString().split("T")[0]
              ? `Today Forecast`
              : formatted + `  Forecast`}
          </Typography>

          {isLoading ? (
            <Stack sx={{ height: 250, p: 2, pt: 1, overflowY: "auto" }}>
              {Array.from({ length: 10 }).map((_, index) => (
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
                      <Skeleton variant="text" width={50} />
                    </Typography>
                    <Stack>
                      <Skeleton variant="circular" width={25} height={25} />
                    </Stack>
                    <Typography
                      variant="h6"
                      sx={{
                        maxWidth: 70,
                        color: (theme) =>
                          theme.palette.mode === "dark" ? "white" : "black",
                      }}
                    >
                      <Skeleton variant="text" width={50} />
                      <sup>o</sup>C
                    </Typography>
                  </Stack>
                  <Divider orientation="horizontal" flexItem />
                </Stack>
              ))}
            </Stack>
          ) : (
            <Stack sx={{ height: 250, p: 2, pt: 1, overflowY: "auto" }}>
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
          )}
        </StyledContainer>
      </Grid>
      <Grid
        key={selectedDate}
        container
        size={{ xs: 12, md: 8 }}
        spacing={2}
        height={"100%"}
        direction={{ xs: "row", md: "column" }}
      >
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

        {!isLoading ? (
          fetchedWeatherForecastData?.forecast
            .filter(
              (dailyForecast: DailyForecast) =>
                dailyForecast.date === selectedDate
            )
            .map((dailyForecast: DailyForecast, index: number) => (
              <>
                <HightLightData index={index} dailyForecast={dailyForecast} />
              </>
            ))
        ) : (
          <LoadingHightLights />
        )}
      </Grid>
    </Grid>
  );
}
