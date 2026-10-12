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
      justifyContent="flex-start"
      alignItems="center"
      gap={{ xs: 1.5, md: 1, lg: 1.5 }}
      mt={1}
      flexWrap={{ xs: "wrap", md: "nowrap" }}
      sx={{
        color: "text.secondary",
        width: "100%",
        maxWidth: "100%",
        "& svg": {
          width: { xs: 30, md: 34, lg: ICON_SIZE },
          height: { xs: 30, md: 34, lg: ICON_SIZE },
          transition: "transform 180ms ease, color 180ms ease",
        },
        "& svg:hover": {
          color: "secondary.main",
          transform: "translateY(-3px) scale(1.06)",
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
