"use client";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import { usePathname } from "next/navigation";
import { CssBaseline, Stack } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define routes where the Navbar should not appear
  const noNavbarRoutes = ["/login", "/sign-up"];
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <body>
          <Stack sx={{ mx: noNavbarRoutes.includes(pathname) ? 0 : 18 }}>
            {/* {!noNavbarRoutes.includes(pathname) && <NavBar />} */}

            <Stack
              sx={{
                height: "100%",
              }}
            >
              {children}
            </Stack>
          </Stack>
        </body>
      </ThemeProvider>
    </html>
  );
}
