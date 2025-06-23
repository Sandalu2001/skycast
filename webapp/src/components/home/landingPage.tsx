"use client";

import { Avatar, Stack } from "@mui/material";
import LocationCard from "../cards/locationCard";
import SecondaryLocationCard from "../cards/secondaryLocationCard";
import { LocationPin, SearchRounded } from "@mui/icons-material";
import CoreDataSection from "./coreData";
import MetaDataSection from "./metaData";
import DailyForcastSection from "./dailyForcast";
import CustomTextField from "../common/customTextField";
import { useEffect, useState } from "react";
import { fetchWeatherForecast, ForecastData } from "@/lib/weather";
import LabelBottomNavigation from "../common/navBar";

export default function LandingPage() {
  const [fetchedWeatherForecastData, setFetchedWeatherForecastData] =
    useState<ForecastData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("LandingPage rendered", error);
  }, [error]);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const [selectedDate, setSelectedDate] = useState<string>(
    `${year}-${month}-${day}`
  );

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchWeatherForecast("Colombo", 7);
        setFetchedWeatherForecastData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
        setFetchedWeatherForecastData(undefined);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
          p: 8,
          gap: 4,
          flex: 5,
          background: (theme) => theme.palette.background.paper,
          height: "100%",
        }}
      >
        <Stack
          spacing={4}
          flex={1}
          sx={{
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <Stack
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <MetaDataSection />
          </Stack>
          <DailyForcastSection
            fetchedWeatherForecastData={fetchedWeatherForecastData}
            isLoading={loading}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
          />
        </Stack>
        <Stack flex={1} sx={{ height: "50%" }}>
          <CoreDataSection
            fetchedWeatherForecastData={fetchedWeatherForecastData}
            isLoading={loading}
            selectedDate={selectedDate}
          />
        </Stack>
      </Stack>

      {/* Location card */}
      <Stack
        sx={{
          height: "100%",
          py: { xs: 6, md: 8 },
          pl: { xs: 5, md: 5 },
          pr: { xs: 5, md: 8 },
          flex: 2,
          background: (theme) => theme.palette.background.default,
          flexShrink: 0,
          gap: 3,
        }}
      >
        <Stack
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <MetaDataSection />
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomTextField
            name={"search"}
            label={"Search"}
            value={""}
            onChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              console.log(event.target.value);
            }}
            id={""}
            type={"text"}
            startIcon={<SearchRounded />}
            endIcon={<LocationPin />}
          />
          <Avatar />
        </Stack>

        <LocationCard
          imageURL={"sunny"}
          day={"Today"}
          temperature={"29"}
          location={"New York"}
          wind={"5 km/h"}
          humidity={"60%"}
        />
        <Stack
          gap={2}
          sx={{ overflow: "auto", mx: -3, height: { xs: 195, md: "100%" } }}
        >
          <SecondaryLocationCard
            imageURL={"sunny"}
            day={"Tomorrow"}
            temperature={"30"}
            location={"Los Angeles"}
            wind={"3 km/h"}
            humidity={"55%"}
          />
          <SecondaryLocationCard
            imageURL={"sunny"}
            day={"Tomorrow"}
            temperature={"30"}
            location={"Los Angeles"}
            wind={"3 km/h"}
            humidity={"55%"}
          />
          <SecondaryLocationCard
            imageURL={"sunny"}
            day={"Tomorrow"}
            temperature={"30"}
            location={"Los Angeles"}
            wind={"3 km/h"}
            humidity={"55%"}
          />
          <SecondaryLocationCard
            imageURL={"sunny"}
            day={"Tomorrow"}
            temperature={"30"}
            location={"Los Angeles"}
            wind={"3 km/h"}
            humidity={"55%"}
          />
          <SecondaryLocationCard
            imageURL={"sunny"}
            day={"Tomorrow"}
            temperature={"30"}
            location={"Los Angeles"}
            wind={"3 km/h"}
            humidity={"55%"}
          />
        </Stack>

        <LabelBottomNavigation />
      </Stack>
    </Stack>
  );
}
