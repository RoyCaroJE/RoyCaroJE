import { Divider, Grid, Stack, Typography } from "@mui/material";

function Contact() {
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
        Let's get in touch!
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

export default Contact;
