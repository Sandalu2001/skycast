import { Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";

export function SectionSkeleton() {
  return (
    <Grid container spacing={6.5} columns={12}>
      <Grid size={4}>
        <Skeleton variant="rectangular" width={210} height={118} />
      </Grid>
      <Grid size={4}>
        <Skeleton variant="rectangular" width={210} height={118} />
      </Grid>

      <Grid size={4}>
        <Skeleton variant="rectangular" width={210} height={118} />
      </Grid>
    </Grid>
  );
}

export function CardsSkeleton() {
  return <></>;
}
