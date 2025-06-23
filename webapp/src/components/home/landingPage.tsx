"use client";

import {
  Autocomplete,
  Box,
  CircularProgress,
  InputAdornment,
  Stack,
  TextField,
  alpha,
  debounce,
} from "@mui/material";
import LocationCard from "../cards/locationCard";
import SecondaryLocationCard from "../cards/secondaryLocationCard";
import { LocationPin, SearchRounded } from "@mui/icons-material";
import CoreDataSection from "./coreData";
import MetaDataSection from "./metaData";
import DailyForcastSection from "./dailyForcast";
import { useEffect, useState, useCallback } from "react";
import {
  fetchCurrentWeather,
  CurrentWeatherData,
  fetchWeatherForecast,
  ForecastData,
  LocationSearchResult,
  searchLocations,
} from "@/lib/weather";
import LabelBottomNavigation from "../common/navBar";
import React from "react";

export default function LandingPage() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData>();
  const [fetchedWeatherForecastData, setFetchedWeatherForecastData] =
    useState<ForecastData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autocompleteOpen, setAutocompleteOpen] = useState(false);
  const [autocompleteOptions, setAutocompleteOptions] = useState<
    readonly LocationSearchResult[]
  >([]);
  const [autocompleteLoading, setAutoCompleteLoading] = useState(false);
  const [autocompleteError, setAutoCompleteError] = useState<string | null>(
    null
  );
  const [inputValue, setInputValue] = useState("");
  const [selectedLocationName, setSelectedLocationName] = useState("Colombo");

  console.log(selectedLocationName, error);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const [selectedDate, setSelectedDate] = useState<string>(
    `${year}-${month}-${day}`
  );

  const getAllWeatherData = async (location: string) => {
    setLoading(true);
    setError(null);
    try {
      const [currentData, forecastData] = await Promise.all([
        fetchCurrentWeather(location),
        fetchWeatherForecast(location, 7),
      ]);
      setCurrentWeather(currentData);
      setFetchedWeatherForecastData(forecastData);
      setSelectedLocationName(currentData.locationName);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      setCurrentWeather(undefined);
      setFetchedWeatherForecastData(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllWeatherData("Colombo");
  }, []);

  const fetchAutocompleteOptions = useCallback(
    debounce(async (searchTerm: string) => {
      if (searchTerm.trim() === "") {
        setAutocompleteOptions([]);
        setAutoCompleteLoading(false);
        return;
      }
      setAutoCompleteLoading(true);
      setAutoCompleteError(null);
      try {
        const data = await searchLocations(searchTerm);
        setAutocompleteOptions(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to search locations";
        setAutoCompleteError(errorMessage);
        setAutocompleteOptions([]);
      } finally {
        setAutoCompleteLoading(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    if (inputValue && autocompleteOpen) {
      fetchAutocompleteOptions(inputValue);
    } else if (!autocompleteOpen) {
      setAutocompleteOptions([]);
    }
  }, [inputValue, autocompleteOpen, fetchAutocompleteOptions]);

  const handleAutocompleteChange = (
    event: React.SyntheticEvent,
    newValue: LocationSearchResult | null
  ) => {
    setAutocompleteOptions([]);
    if (newValue) {
      setSelectedLocationName(newValue.name);
      getAllWeatherData(newValue.name);
    }
  };

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
          <MetaDataSection />
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
          overflow: "hidden",
        }}
      >
        <Stack sx={{ height: "100%", gap: 3 }}>
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
            <Autocomplete
              id="location-search-autocomplete"
              open={autocompleteOpen}
              onOpen={() => setAutocompleteOpen(true)}
              onClose={() => setAutocompleteOpen(false)}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              getOptionLabel={(option) => `${option.name}, ${option.country}`}
              options={autocompleteOptions}
              loading={autocompleteLoading}
              fullWidth
              loadingText="Searching locations..."
              noOptionsText={
                autocompleteError || "No locations found. Type to search."
              }
              onChange={handleAutocompleteChange}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Location"
                  placeholder="E.g., London"
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchRounded />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <React.Fragment>
                        {autocompleteLoading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 5,
                      backgroundColor: (theme) =>
                        alpha(theme.palette.action.hover, 0.05),
                      "& fieldset": {
                        borderColor: (theme) =>
                          alpha(theme.palette.grey[500], 0.3),
                      },
                      "&:hover fieldset": {
                        borderColor: (theme) => theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: (theme) => theme.palette.primary.main,
                      },
                    },
                  }}
                />
              )}
              renderOption={(props, option) => (
                <Box component="li" {...props} key={option.id}>
                  <LocationPin
                    key={option.id}
                    sx={{ mr: 1, fontSize: "1rem", color: "text.secondary" }}
                  />
                  {option.name}, {option.region ? `${option.region}, ` : ""}
                  {option.country}
                </Box>
              )}
            />
          </Stack>

          <LocationCard
            fetchedLocationData={currentWeather}
            isLoading={loading}
            selectedDate={selectedDate}
          />

          <Stack
            gap={2}
            sx={{
              overflowY: "auto",
              flexGrow: 1,
              mx: -3,
            }}
          >
            <SecondaryLocationCard
              location="Los Angeles"
              imageURL={""}
              day={""}
              temperature={""}
              wind={""}
              humidity={""}
            />
            <SecondaryLocationCard
              location="Paris"
              imageURL={""}
              day={""}
              temperature={""}
              wind={""}
              humidity={""}
            />
            <SecondaryLocationCard
              location="Tokyo"
              imageURL={""}
              day={""}
              temperature={""}
              wind={""}
              humidity={""}
            />
          </Stack>

          <LabelBottomNavigation />
        </Stack>
      </Stack>
    </Stack>
  );
}
