import Grid from "@mui/material/Grid";
import AppBar from "./components/AppBar";
import { Avatar, Typography, Box } from "@mui/material";
import me from "./static/me.jpg";
import TechStack from "./components/TechStack";

interface AppProps {
  toggleTheme: () => void;
  isDark: boolean;
}

function Home({ toggleTheme, isDark }: AppProps) {
  return (
    <>
      <AppBar toggleTheme={toggleTheme} isDark={isDark} />

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: { xs: 6, md: 12 }, px: 2, gap: { xs: 4, md: 2 } }}
      >
        <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
          <Avatar
            alt="Jean Edouard Roy Caro Picture"
            src={me}
            sx={{
              width: 250,
              height: 250,
              boxShadow: 4,
              border: "3px solid",
              borderColor: "primary.main",
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 700,
                lineHeight: 1.6,
                textAlign: "justify",
                fontSize: "1.1rem",
              }}
            >
              I'm a Software Engineer from Málaga, building scalable apps with
              Java Spring Boot and React TypeScript. I work across the full
              development lifecycle and enjoy clean architectures, maintainable
              code, and modern tools like Docker, Kubernetes, MySQL, PostgreSQL,
              GitHub, and GitHub Actions. Fluent in French, Spanish, Portuguese,
              and English, I thrive in multicultural teams—and yes, I bring
              Málaga sunshine to stand-ups! ☀️😄
            </Typography>
            <TechStack />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
