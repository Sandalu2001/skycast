import { Grid, Skeleton, Stack, Typography, alpha } from "@mui/material";
import StyledContainer from "./styleComponent";
import Image from "next/image";

export default function LoadingHightLights() {
  return (
    <>
      <Grid container sx={{ flexGrow: 3 }} spacing={2}>
        <Grid size={4}>
          <StyledContainer
            sx={{
              p: 0,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              alignContent: "space-between",
            }}
          >
            <Typography
              variant="body1"
              textAlign={"left"}
              sx={{
                fontWeight: 700,
                top: 0,
                color: (theme) =>
                  theme.palette.mode === "dark" ? "white" : "black",
              }}
            >
              Wind
            </Typography>
            <Image
              src={"/images/wind.png"}
              width={100}
              height={100}
              alt="wind phase"
            />
            <Typography
              variant="body1"
              textAlign={"left"}
              sx={{
                top: 0,
                color: (theme) =>
                  theme.palette.mode === "dark" ? "white" : "black",
              }}
            >
              <Skeleton variant="text" width={30} />{" "}
            </Typography>
          </StyledContainer>
        </Grid>

        <Grid size={4}>
          <StyledContainer
            sx={{
              p: 0,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              alignContent: "space-between",
            }}
          >
            <Typography
              variant="body1"
              textAlign={"left"}
              sx={{
                fontWeight: 700,
                top: 0,
                color: (theme) =>
                  theme.palette.mode === "dark" ? "white" : "black",
              }}
            >
              Moon Phase
            </Typography>
            <Image
              src={"/images/moon.png"}
              width={100}
              height={100}
              alt="moon phase"
            />
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <Typography
                variant="body1"
                sx={{
                  top: 0,
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black",
                }}
              >
                <Skeleton variant="text" width={30} />{" "}
              </Typography>
            </Stack>
          </StyledContainer>
        </Grid>
        <Grid size={4}>
          <StyledContainer
            sx={{
              p: 0,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              alignContent: "space-between",
            }}
          >
            <Typography
              variant="body1"
              textAlign={"left"}
              sx={{
                fontWeight: 700,
                top: 0,
                color: (theme) =>
                  theme.palette.mode === "dark" ? "white" : "black",
              }}
            >
              Sunset & Sunshine
            </Typography>
            <Image
              src={"/images/sunny.png"}
              width={100}
              height={100}
              alt="sunset"
            />
            <Stack justifyContent={"space-between"} flexDirection={"row"}>
              <Typography
                variant="body2"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black",
                }}
              >
                Sunrise :
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black",
                }}
              >
                <Skeleton variant="text" width={30} />{" "}
              </Typography>
            </Stack>

            <Stack justifyContent={"space-between"} flexDirection={"row"}>
              <Typography
                variant="body2"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black",
                }}
              >
                Sunrise :
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "white" : "black",
                }}
              >
                <Skeleton variant="text" width={30} />{" "}
              </Typography>
            </Stack>
          </StyledContainer>
        </Grid>
      </Grid>
      <Grid container sx={{ flexGrow: 6 }} spacing={2}>
        <Grid size={4}>
          <StyledContainer
            sx={{
              background: (theme) =>
                `linear-gradient(-45deg, ${theme.palette.primary.main}, ${alpha(
                  theme.palette.primary.main,
                  0.6
                )})`,
              height: "100%",
              p: 1,
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: 700,
              }}
            >
              Humidity
            </Typography>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Image
                src={"/images/humidity.png"}
                width={40}
                height={40}
                alt="humidity"
              />
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  ml: 1,
                }}
              >
                <Skeleton variant="text" width={30} />{" "}
              </Typography>
            </Stack>
          </StyledContainer>
        </Grid>

        <Grid size={4}>
          <StyledContainer
            sx={{
              background: (theme) =>
                `linear-gradient(-45deg, ${theme.palette.primary.main}, ${alpha(
                  theme.palette.primary.main,
                  0.6
                )})`,
              height: "100%",
              p: 1,
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: 700,
              }}
            >
              Rain
            </Typography>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Image
                src={"/images/1153.png"}
                width={40}
                height={40}
                alt="humidity"
              />
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  ml: 1,
                }}
              >
                <Skeleton variant="text" width={30} />
              </Typography>
            </Stack>
          </StyledContainer>
        </Grid>
        <Grid size={4}>
          <StyledContainer
            sx={{
              background: (theme) =>
                `linear-gradient(-45deg, ${theme.palette.primary.main}, ${alpha(
                  theme.palette.primary.main,
                  0.6
                )})`,
              height: "100%",
              p: 1,
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: 700,
              }}
            >
              UV Index
            </Typography>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Image
                src={"/images/humidity.png"}
                width={40}
                height={40}
                alt="humidity"
              />
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  ml: 1,
                }}
              >
                <Skeleton variant="text" width={30} />{" "}
              </Typography>
            </Stack>
          </StyledContainer>
        </Grid>
      </Grid>
    </>
  );
}
