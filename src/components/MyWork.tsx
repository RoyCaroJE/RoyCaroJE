import { Divider, Grid, Stack, Typography } from "@mui/material";

function MyWork() {
  return (
    <Grid container direction="column" spacing={4}>
      <Typography
        variant="h3"
        fontWeight={800}
        sx={{
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          justifyContent: "flex-start",
        }}
      >
        My Work
      </Typography>
      <Stack
        direction="row"
        divider={<Divider />}
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Stack>
      <Grid></Grid>
    </Grid>
  );
}

export default MyWork;
