import { Container, Divider, Stack } from "@mui/material";
import Presentation from "./components/Presentation";

function Home() {
  return (
    <Container>
      <Stack divider={<Divider />} spacing={2}>
        <Presentation />
      </Stack>
    </Container>
  );
}

export default Home;
