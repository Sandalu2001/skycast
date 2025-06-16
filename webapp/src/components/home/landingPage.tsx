"use client";

import { alpha, Avatar, Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DateCard from "../cards/dateCard";
import LocationCard from "../cards/locationCard";
import SecondaryLocationCard from "../cards/secondaryLocationCard";
import {
  LocationCityRounded,
  LocationPin,
  SearchOffRounded,
  SearchRounded,
  Sunny,
} from "@mui/icons-material";
import CoreDataSection from "./coreData";
import MetaDataSection from "./metaData";
import DailyForcastSection from "./dailyForcast";
import StyledContainer from "../common/styleComponent";
import CustomTextField from "../common/customTextField";

export default function LandingPage() {
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
          <DailyForcastSection />
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
