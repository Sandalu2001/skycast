// src/context/ThemeContext.tsx
"use client"; // Context Providers that manage state typically need to be client components

import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  ReactNode,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  PaletteMode,
  CssBaseline,
  Stack,
} from "@mui/material";
import { generateTheme } from "../theme";

interface ThemeContextType {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return context;
};

interface ThemeModeProviderProps {
  children: ReactNode;
}

const RootLayout: React.FC<ThemeModeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => generateTheme(mode), [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      toggleColorMode,
    }),
    [mode]
  );
  return (
    <html lang="en">
      <body>
        <CssBaseline />

        <ThemeContext.Provider value={contextValue}>
          <MuiThemeProvider theme={theme}>
            {" "}
            <Stack
              sx={{
                height: { xs: "100vh", md: "100vh" },
              }}
            >
              {children}
            </Stack>
          </MuiThemeProvider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
