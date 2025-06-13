"use client";

import { ThemeProvider } from "@mui/material/styles";
import { generateTheme } from "../theme";
import { usePathname } from "next/navigation";
import { CssBaseline, Stack } from "@mui/material";
import { useMemo, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define routes where the Navbar should not appear
  const noNavbarRoutes = ["/login", "/sign-up"];

  const [mode, setMode] = useState<"dark" | "light">("light");
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => generateTheme(mode), [mode]);

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <body>
          <Stack
            sx={{
              height: "100vh",
            }}
          >
            {children}
          </Stack>
        </body>
      </ThemeProvider>
    </html>
  );
}
