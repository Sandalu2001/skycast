import { alpha, Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default async function LandingPage() {
  return (
    <Stack
      sx={{
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: 5,
        bgcolor: alpha("#3D0301", 0.1),
        p: 2,
        borderRadius: 6,
      }}
    >
      {/* Top Section */}
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 0,
        }}
      >
        <Stack sx={{ flexDirection: "column" }} gap={5}>
          <Stack flexDirection={"column"}>
            <Typography
              variant="h1"
              color="primary"
              sx={{ fontWeight: "medium" }}
            >
              Master New Skills
            </Typography>

            <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
              <Typography
                variant="h1"
                color="primary"
                sx={{ fontWeight: "medium" }}
              >
                with CourseCo
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="body1" color="primary">
              Are you tired of pulling all-nighters and still
            </Typography>
            <Typography variant="body1" color="primary">
              struggling to keep up with your coursework?
            </Typography>
          </Stack>
          <Stack
            sx={{
              alignItems: "start",
            }}
          >
            <Button
              variant="contained"
              href="/sign-up"
              sx={{ borderRadius: 4 }}
            >
              Get started
            </Button>
          </Stack>
        </Stack>
        <Stack>
          <Image
            src="/assets/tutorial.svg"
            width={500}
            height={500}
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </Stack>
      </Stack>

      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack gap={1.2}>
          <Typography color="primary" variant="h3" sx={{ fontWeight: "bold" }}>
            {`Welcome back `}
          </Typography>
          <Typography color="primary" variant="h3" sx={{ fontWeight: "bold" }}>
            New Skills with CourseCo.
          </Typography>
        </Stack>
        <Stack
          gap={1.2}
          sx={{
            alignContent: "start",
            alignItems: "start",
          }}
        >
          <Box>
            <Typography color="primary" variant="body2" fontSize={13}>
              With real world projects to create and
            </Typography>
            <Typography color="primary" variant="body2" fontSize={13}>
              online classes that fit a busy routine
            </Typography>
          </Box>
          <Button variant="contained" href="/sign-up" sx={{ borderRadius: 6 }}>
            Get started
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
