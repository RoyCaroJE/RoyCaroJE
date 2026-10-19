import { Container, Stack } from "@mui/material";
import Presentation from "./components/Presentation";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";

function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 5 } }}>
      <Stack spacing={{ xs: 2, md: 3 }}>
        <Presentation />
        <Projects />
        <Experience />
        <Education />
      </Stack>
    </Container>
  );
}

export default Home;
