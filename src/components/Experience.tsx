import { Grid, Stack, Typography } from "@mui/material";
import JobExperienceCard from "./JobExperienceCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Experience() {
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
        Experience
      </Typography>
      <Stack
        direction="row"
        divider={<ChevronRightIcon />}
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <JobExperienceCard
          company="NTT Data Spain/LATAM"
          role="Intern"
          time="Mar. 2024 - May 2024"
          description="WIP"
        />
        <JobExperienceCard
          company="BESTSELLER A/S"
          role="Jr. Full-Stack Developer"
          time="Oct. 2024 - Actual"
          description="WIP"
          actual
        />
      </Stack>
      <Grid></Grid>
    </Grid>
  );
}

export default Experience;
