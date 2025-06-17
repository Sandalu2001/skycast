import { Grid, Skeleton } from "@mui/material";

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
