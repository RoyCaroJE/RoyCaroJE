import { lazy, Suspense } from "react";
import { Container, Divider, Stack } from "@mui/material";
import Presentation from "./components/Presentation";

const Projects = lazy(() => import("./components/projects/Projects.tsx"));
const Experience = lazy(() => import("./components/experience/Experience.tsx"));

function Home() {
  return (
    <Container>
      <Stack divider={<Divider />} spacing={2}>
        <Presentation />
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Stack>
    </Container>
  );
}

export default Home;
