"use client";

import { alpha, Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DateCard from "../cards/dateCard";
import LocationCard from "../cards/locationCard";
import SecondaryLocationCard from "../cards/secondaryLocationCard";
import { Sunny } from "@mui/icons-material";
import DailyForcastSection from "./DailyForcast";
import CoreDataSection from "./coreData";

export default function LandingPage() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
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
          alignContent: "space-between",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack
            gap={1}
            sx={{ width: "100%" }}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignContent={"space-between"}
          >
            <Typography
              variant="h3"
              color="primary"
              sx={{
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Sunny fontSize="large" />
              {`Good morning, Sandalu!`}
            </Typography>

            <Stack gap={2}>
              <Typography variant="h3" color="primary">
                07.32 AM
              </Typography>
              <Typography
                variant="h5"
                color="primary.dark"
                sx={{ fontWeight: 600 }}
              >
                Wednesday,14 Jun 2025
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <DailyForcastSection />
        <CoreDataSection />
      </Stack>

      {/* Location card */}
      <Stack
        sx={{
          height: "100%",
          p: 5,
          flex: 2,
          flexShrink: 0,
          gap: 3,
          overflow: "auto",
        }}
      >
        <LocationCard
          imageURL={"sunny"}
          day={"Today"}
          temperature={"29"}
          location={"New York"}
          wind={"5 km/h"}
          humidity={"60%"}
        />
        <Stack gap={2}>
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
