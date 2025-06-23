import LandingPage from "@/components/home/landingPage";
import { Box } from "@mui/material";

export default async function Main() {
  return (
    <main style={{ height: "100%" }}>
      <Box sx={{ height: "100%" }}>
        <LandingPage />
      </Box>
    </main>
  );
}
