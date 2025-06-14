import { Stack } from "@mui/material";
import DateCard from "../cards/dateCard";

export default function DailyForcastSection() {
  return (
    <Stack
      sx={{
        background: (theme) => theme.palette.background.paper,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <DateCard
        imageURL={"sunny"}
        day={"Sun"}
        temperature={"29"}
        isToday={false}
      />

      <DateCard
        imageURL={"raining"}
        day={"Mon"}
        temperature={"29"}
        isToday={false}
      />

      <DateCard
        imageURL={"slightly-raining"}
        day={"Tue"}
        temperature={"29"}
        isToday={false}
      />

      <DateCard imageURL={"sunny"} day={"Wed"} temperature={"29"} isToday />

      <DateCard
        imageURL={"thunderstorm"}
        day={"Thu"}
        temperature={"29"}
        isToday={false}
      />
      <DateCard
        imageURL={"windy"}
        day={"Fri"}
        temperature={"29"}
        isToday={false}
      />

      <DateCard
        imageURL={"cloudy"}
        day={"Sat"}
        temperature={"29"}
        isToday={false}
      />
    </Stack>
  );
}
