"use client";

import { Avatar, Skeleton, Stack, Typography } from "@mui/material";
import LocationCard from "../cards/locationCard";
import SecondaryLocationCard from "../cards/secondaryLocationCard";
import { LocationPin, SearchRounded } from "@mui/icons-material";
import CoreDataSection from "./coreData";
import MetaDataSection from "./metaData";
import DailyForcastSection from "./dailyForcast";
import StyledContainer from "../common/styleComponent";
import CustomTextField from "../common/customTextField";
import { useEffect, useState } from "react";
import { fetchWeatherForecast, ForecastData } from "@/lib/weather";

export default function LandingPage() {
  const [fetchedWeatherForecastData, setFetchedWeatherForecastData] =
    useState<ForecastData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchWeatherForecast("Colombo", 7);
        setFetchedWeatherForecastData(data);
      } catch (err: any) {
        setError(err.message);
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
        flexDirection: "row",
      }}
    >
      <Stack
        sx={{
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
          <MetaDataSection />
          {loading ? (
            <Stack
              sx={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {Array.from({ length: 7 }).map((_, idx) => {
                return (
                  <StyledContainer
                    key={idx}
                    sx={{ px: 2, py: 2, borderRadius: 8 }}
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
          ) : !fetchedWeatherForecastData ? (
            <StyledContainer
              sx={{ px: 2, py: 2, borderRadius: 8, flexDirection: "row" }}
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
          ) : (
            <DailyForcastSection
              fetchedWeatherForecastData={fetchedWeatherForecastData}
            />
          )}
        </Stack>
        <Stack flex={1} sx={{ height: "50%" }}>
          <CoreDataSection />
        </Stack>
      </Stack>

      {/* Location card */}
      <Stack
        sx={{
          height: "100%",
          py: 8,
          pl: 5,
          pr: 8,

          flex: 2,
          flexShrink: 0,
          gap: 3,
        }}
      >
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
              throw new Error("Function not implemented.");
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
        <Stack gap={2} sx={{ overflow: "auto", mx: -3 }}>
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
      </Stack>
    </Stack>
  );
}
