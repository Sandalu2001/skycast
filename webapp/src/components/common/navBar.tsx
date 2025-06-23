"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";

export default function LabelBottomNavigation() {
  const theme = useTheme();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
        mx: -5,
        position: "fixed",
        alignSelf: "center",
        bottom: 30,
        width: "70%",
        zIndex: 1000,
        height: 70,
        borderRadius: 40,
        boxShadow: 3,
        bgcolor: "background.paper",
      }}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
        sx={getActionStyles("recents")}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
        sx={getActionStyles("favorites")}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
        sx={getActionStyles("nearby")}
      />
    </BottomNavigation>
  );
}
