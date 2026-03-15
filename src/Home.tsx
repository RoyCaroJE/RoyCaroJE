import { Container, Divider, Stack } from "@mui/material";
import Presentation from "./components/Presentation";
import Projects from "./components/projects/Projects.tsx";
import Experience from "./components/experience/Experience.tsx";

function Home() {
  return (
    <Container>
      <Stack divider={<Divider />} spacing={2}>
        <Presentation />
        <Projects />
        <Experience />
      </Stack>
    </Container>
  );
}

export default Home;
