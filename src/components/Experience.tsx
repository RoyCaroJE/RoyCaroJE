import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import JobExperienceCard from "./JobExperienceCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
        direction={{ xs: "column", md: "row" }}
        divider={isMobile ? <ArrowDownwardIcon /> : <ArrowForwardIcon />}
        spacing={2}
        sx={{
          justifyContent: "flex-start",
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
