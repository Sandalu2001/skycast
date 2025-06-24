"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";
import { Search } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LabelBottomNavigation() {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  let initialValue = "search";
  if (pathname === "/search") {
    initialValue = "search";
  } else if (pathname === "/forecast") {
    initialValue = "forecast";
  }

  const [value, setValue] = React.useState("initialValue");

  useEffect(() => {
    if (pathname === "/search" && value !== "search") {
      setValue("search");
    } else if (pathname === "/forecast" && value !== "forecast") {
      setValue("forecast");
    } else if (pathname === "/" && value !== "search") {
      setValue("search");
    }
  }, [pathname, value]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    if (newValue === "search") {
      router.push("/");
    } else {
      router.push(`/${newValue}`);
    }
  };

  const getActionStyles = (actionValue: string) => ({
    "& .MuiBottomNavigationAction-label": {
      fontWeight: value === actionValue ? "bold" : "normal",
      color:
        value === actionValue
          ? theme.palette.secondary.contrastText
          : theme.palette.text.primary,
    },
    "& .MuiSvgIcon-root": {
      fontSize: 35,
      padding: 1,

      color:
        value === actionValue
          ? theme.palette.secondary.contrastText
          : "inherit",
      transition: "background-color 0.3s, color 0.3s",
    },
    padding: 1,
    borderRadius: 40,
    backgroundColor:
      value === actionValue ? theme.palette.secondary.main : "transparent",
    transition: "background-color 0.3s, color 0.3s",
    m: 0.4,
  });

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{
        display: { xs: "flex", md: "none" },
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: 30,
        zIndex: 1000,
        height: 70,
        borderRadius: 40,
        boxShadow: 3,
        bgcolor: "background.paper",
      }}
    >
      <BottomNavigationAction
        label="Location"
        value="search"
        icon={<Search />}
        sx={getActionStyles("search")}
      />

      <BottomNavigationAction
        label="Forecast"
        value="forecast"
        icon={<LocationOnIcon />}
        sx={getActionStyles("forecast")}
      />
    </BottomNavigation>
  );
}
