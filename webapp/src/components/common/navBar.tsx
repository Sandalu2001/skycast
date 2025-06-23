"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
      }}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon fontSize="large" />}
      />
    </BottomNavigation>
  );
}
