import { Box } from "@mui/material";
import {
  JavaIcon,
  SpringBootIcon,
  ReactIcon,
  TypeScriptIcon,
  DockerIcon,
  KubernetesIcon,
  MySQLIcon,
  PostgreSQLIcon,
  GitIcon,
  GitHubActionsIcon,
} from "./icons";

const ICON_SIZE = 40;

export default function TechStack() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={3}
      mt={3}
      flexWrap="wrap"
      sx={{
        color: "text.secondary",
        "& svg": {
          width: ICON_SIZE,
          height: ICON_SIZE,
        },
        "& svg:hover": {
          color: "secondary.main",
          transform: "scale(1.1)",
          transition: "transform 0.2s ease, color 0.2s ease",
        },
      }}
    >
      <JavaIcon />
      <SpringBootIcon />
      <ReactIcon />
      <TypeScriptIcon />
      <DockerIcon />
      <KubernetesIcon />
      <MySQLIcon />
      <PostgreSQLIcon />
      <GitIcon />
      <GitHubActionsIcon />
    </Box>
  );
}
