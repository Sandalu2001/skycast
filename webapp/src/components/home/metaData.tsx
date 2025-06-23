"use client";

import { IconButton, Stack, Typography } from "@mui/material";
import StyledContainer from "../common/styleComponent";
import { Sunny } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeMode } from "@/context/themeContext";

export interface DataCardProps {
  imageURL: string;
  day: string;
  temperature: string;
  location: string;
  wind: string;
  humidity: string;
}

export default function MetaDataSection() {
  const { mode, toggleColorMode } = useThemeMode();

  return (
    <Stack sx={{ position: "relative" }}>
      <Stack
        gap={4}
        sx={{ width: "100%" }}
        flexDirection={{ xs: "column-reverse", md: "row" }}
        justifyContent={"space-between"}
        alignContent={"space-between"}
      >
        <Typography
          color="primary"
          sx={{
            typography: { xs: "h4", md: "h3" },
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: (theme) =>
              theme.palette.mode === "dark" ? "white" : "primary.main",
          }}
        >
          <Sunny fontSize="large" />
          {new Date().getHours() < 12
            ? "Good Morning"
            : new Date().getHours() < 18
            ? "Good Afternoon"
            : "Good Evening"}
        </Typography>

        <Stack
          gap={2}
          flexDirection={{ xs: "row-reverse", md: "column" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <StyledContainer
            sx={{
              p: 0.3,
              flexDirection: "row",
              gap: 1,
            }}
            alignSelf={"end"}
          >
            <IconButton
              onClick={toggleColorMode}
              sx={{
                color: mode === "light" ? "white" : "primary.main",
                background:
                  mode === "light"
                    ? (theme) => theme.palette.primary.main
                    : "transparent",
                ":hover": {
                  background:
                    mode === "light"
                      ? (theme) => theme.palette.primary.dark
                      : "default",
                },
              }}
            >
              <LightModeIcon />
            </IconButton>
            <IconButton
              onClick={toggleColorMode}
              sx={{
                color: mode === "dark" ? "background.default" : "primary.main",
                background:
                  mode === "dark"
                    ? (theme) => theme.palette.primary.main
                    : "transparent",
                ":hover": {
                  background:
                    mode === "dark"
                      ? (theme) => theme.palette.primary.dark
                      : "default",
                },
              }}
            >
              <DarkModeIcon />
            </IconButton>
          </StyledContainer>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: (theme) =>
                theme.palette.mode === "dark" ? "white" : "primary.main",
            }}
          >
            {`${new Date().toLocaleDateString("en-US", {
              year: "numeric",
              weekday: "long",
              month: "long",
              day: "numeric",
            })}`}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
