import { Container, Divider, Stack } from "@mui/material";
import AppBar from "./components/AppBar";
import Experience from "./components/Experience";
import Presentation from "./components/Presentation";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";

interface AppProps {
  toggleTheme: () => void;
  isDark: boolean;
}

function Home({ toggleTheme, isDark }: AppProps) {
  return (
    <>
      <AppBar toggleTheme={toggleTheme} isDark={isDark} />
      <Container>
        <Stack divider={<Divider />} spacing={2}>
          <Presentation />
          <Experience />
          <MyWork />
          <Contact />
        </Stack>
      </Container>
    </>
  );
}

export default Home;
