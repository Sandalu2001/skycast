import { Skeleton, Stack, Typography } from "@mui/material";
import DateCard from "../cards/dateCard";
import { ForecastData } from "@/lib/weather";
import StyledContainer from "../common/styleComponent";
import Image from "next/image";

export interface DailyForcastSectionProps {
  fetchedWeatherForecastData: ForecastData | undefined;
  isLoading: boolean;
  setSelectedDate: (date: string) => void;
  selectedDate: string;
}

export default function DailyForcastSection({
  fetchedWeatherForecastData,
  isLoading,
  setSelectedDate,
  selectedDate,
}: DailyForcastSectionProps) {
  if (isLoading) {
    return (
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 1,
          overflowX: { xs: "auto", md: "inherit" },
        }}
      >
        {Array.from({ length: 7 }).map((_, idx) => {
          return (
            <StyledContainer
              key={idx}
              sx={{
                px: { xs: 2, md: 2 },

                py: 2,
                borderRadius: 8,
                width: { xs: 90, md: "auto" },
              }}
            >
              <Stack spacing={1} alignItems="center">
                <Skeleton variant="circular" width={70} height={70} />
                <Typography variant="h4">
                  {" "}
                  <Skeleton variant="text" width={80} />
                </Typography>
                <Typography variant="h5">
                  <Skeleton variant="text" width={80} />
                </Typography>
              </Stack>
            </StyledContainer>
          );
        })}
      </Stack>
    );
  }

  if (!fetchedWeatherForecastData && !isLoading) {
    return (
      <StyledContainer
        sx={{
          p: 0,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image width={100} height={100} src={"/images/error.png"} alt="error" />
        <Typography
          variant="h6"
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
    <Stack
      sx={{
        background: (theme) => theme.palette.background.paper,
        flexDirection: "row",
        justifyContent: "space-between",
        overflowX: { xs: "auto", md: "inherit" },
        gap: 1,
      }}
    >
      {fetchedWeatherForecastData?.forecast.map((value, index) => {
        return (
          <Stack
            key={index}
            onClick={() => setSelectedDate(value.date)}
            sx={{
              cursor: "pointer",
              ":active": {
                transform: "scale(0.90)",
                transition: "transform 0.1s ease-in-out",
              },
            }}
          >
            <DateCard
              imageURL={value.conditionIconCode}
              day={new Date(value.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
              condition={value.conditionText}
              temperature={`${value.minTempC}-${value.maxTempC}`}
              isClicked={
                new Date(value.date).toDateString() ===
                new Date(selectedDate).toDateString()
              }
            />
          </Stack>
        );
      })}
    </Stack>
  );
}
