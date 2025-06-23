import { Box, Skeleton, Stack, Typography } from "@mui/material";
import DateCard from "../cards/dateCard";
import { ForecastData } from "@/lib/weather";
import StyledContainer from "../common/styleComponent";

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
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        {Array.from({ length: 7 }).map((_, idx) => {
          return (
            <StyledContainer key={idx} sx={{ px: 2, py: 2, borderRadius: 8 }}>
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

  if (!isLoading && !fetchedWeatherForecastData) {
    <StyledContainer sx={{ px: 2, py: 2, borderRadius: 8 }}>
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
    </StyledContainer>;
  }

  return (
    <Stack
      sx={{
        background: (theme) => theme.palette.background.paper,
        flexDirection: "row",
        justifyContent: "space-between",
        overflowX: { xs: "auto", md: "inherit" },
      }}
    >
      {fetchedWeatherForecastData?.forecast.map((value, index) => {
        return (
          <Box
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
          </Box>
        );
      })}
    </Stack>
  );
}
