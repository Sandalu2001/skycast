"use client";

import { ThemeModeProvider } from "@/context/themeContext";
import { CssBaseline, Stack } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeModeProvider>
        <CssBaseline />
        <body>
          <Stack
            sx={{
              height: { xs: "100vh", md: "100vh" },
            }}
          >
            {children}
          </Stack>
        </body>
      </ThemeModeProvider>
    </html>
  );
}
