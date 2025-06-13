"use client";

import { alpha, Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DateCard from "../cards/dateCard";

export default function LandingPage() {
  return (
    <Stack
      sx={{
        height: "100%",
        flexDirection: "row",
      }}
    >
      <Stack
        sx={{
          flex: 5,
          background: (theme) => theme.palette.background.paper,
          flexDirection: "row",
          justifyContent: "space-between",
          p: 8,
          pr: 4,
        }}
      >
        <DateCard
          imageURL={"sunny"}
          day={"Sun"}
          temperature={"29"}
          isToday={false}
        />
        <DateCard
          imageURL={"raining"}
          day={"Mon"}
          temperature={"29"}
          isToday={false}
        />
        <DateCard
          imageURL={"slightly-raining"}
          day={"Tue"}
          temperature={"29"}
          isToday={false}
        />
        <DateCard imageURL={"sunny"} day={"Wed"} temperature={"29"} isToday />
        <DateCard
          imageURL={"thunderstorm"}
          day={"Thu"}
          temperature={"29"}
          isToday={false}
        />
        <DateCard
          imageURL={"windy"}
          day={"Fri"}
          temperature={"29"}
          isToday={false}
        />

        <DateCard
          imageURL={"cloudy"}
          day={"Sat"}
          temperature={"29"}
          isToday={false}
        />
      </Stack>
      <Stack sx={{ height: "100%", flex: 2, p: 8, pl: 4 }}></Stack>
    </Stack>
  );
}
