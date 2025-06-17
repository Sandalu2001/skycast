import { Skeleton, Stack, Typography } from "@mui/material";
import DateCard from "../cards/dateCard";
import { useEffect, useState } from "react";
import { fetchWeatherForecast, ForecastData } from "@/lib/weather";
import StyledContainer from "../common/styleComponent";

export interface DailyForcastSectionProps {
  fetchedWeatherForecastData: ForecastData;
}

export default function DailyForcastSection({
  fetchedWeatherForecastData,
}: DailyForcastSectionProps) {
  return (
    <Stack
      sx={{
        background: (theme) => theme.palette.background.paper,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {fetchedWeatherForecastData?.forecast.map((value, index) => {
        return (
          <DateCard
            key={index}
            imageURL={value.conditionIconCode}
            day={new Date(value.date).toLocaleDateString("en-US", {
              weekday: "short",
            })}
            condition={value.conditionText}
            temperature={`${value.minTempC}-${value.maxTempC}`}
            isToday={
              new Date(value.date).toDateString() === new Date().toDateString()
            }
          />
        );
      })}
    </Stack>
  );
}
