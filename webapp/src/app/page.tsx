import { Box, Divider } from "@mui/material";
import LandingPage from "./ui/home/landingPage";
import { Suspense } from "react";
import { SectionSkeleton } from "./ui/common/skeletons";

export default async function Home() {
  return (
    <main style={{ height: "100%" }}>
      <Box sx={{ height: "100%" }}>
        <LandingPage />
        <Divider sx={{ mt: 2 }} />
        {/* <Suspense fallback={<SectionSkeleton />}>
          <Sections />
        </Suspense> */}
      </Box>
    </main>
  );
}
