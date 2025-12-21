import { Box, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import TechStack from "./TechStack";
import me from "../static/me.jpg";

function Presentation() {
  return (
    <Grid
      container
      sx={{
        paddingTop: { xs: 2, md: 4 },
        paddingBottom: { xs: 2, md: 4 },
      }}
    >
      <Grid
        size={{ xs: 12, md: 4 }}
        display="flex"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction="column">
          <Avatar
            alt="Jean Edouard Roy Caro Picture"
            src={me}
            sx={{
              width: 350,
              height: 350,
              boxShadow: 4,
              border: "3px solid",
              borderColor: "secondary.main",
            }}
          />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }} alignItems="center">
        <Box paddingLeft={{ xs: 0, md: 5 }}>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Engineering Scalable Apps.
          </Typography>
          <Typography
            variant="h3"
            fontWeight={400}
            sx={{
              mt: 1,
              color: "text.secondary",
            }}
          >
            Clean Code. Good Vibes.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.6,
              textAlign: "justify",
              fontSize: "1.1rem",
              paddingTop: 2,
            }}
          >
            I'm a Software Engineer from Málaga, building scalable apps with
            Java Spring Boot and React TypeScript. I work across the full
            development lifecycle and enjoy clean architectures, maintainable
            code, and modern tools like Docker, Kubernetes, PostgreSQL, GitHub,
            and GitHub Actions. Fluent in French, Spanish, Portuguese, and
            English, I thrive in multicultural teams, and yes, I bring Málaga
            sunshine to stand-ups! ☀️😄
          </Typography>
          <TechStack />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Presentation;
