import { Container, Stack } from "@mui/material";
import Presentation from "./components/Presentation";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";

function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 5 } }}>
      <Stack spacing={{ xs: 1, md: 2 }}>
        <Presentation />
        <Projects />
        <Experience />
      </Stack>
    </Container>
  );
}

export default Home;
