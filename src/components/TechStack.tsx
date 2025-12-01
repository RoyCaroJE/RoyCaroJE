import { Box } from "@mui/material";
import DockerIcon from "../static/docker.png";
import JavaIcon from "../static/java.png";
import KubernetesIcon from "../static/kubernetes.png";
import MySQLIcon from "../static/mysql.png";
import PostreSQLIcon from "../static/postgresql.png";
import ReactIcon from "../static/react.png";
import SpringBootIcon from "../static/springboot.png";
import TypeScriptIcon from "../static/typescript.png";
import GitIcon from "../static/git.png";
import GitHubActionsIcon from "../static/githubactions.png";

export default function TechStack() {
  const iconWidth = 40;
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={3}
      mt={3}
      flexWrap="wrap" // para que en móvil no se desborde
    >
      <img src={JavaIcon} alt="Java" width={iconWidth} height={iconWidth} />
      <img
        src={SpringBootIcon}
        alt="Spring Boot"
        width={iconWidth}
        height={iconWidth}
      />
      <img src={ReactIcon} alt="React" width={iconWidth} height={iconWidth} />
      <img
        src={TypeScriptIcon}
        alt="TypeScript"
        width={iconWidth}
        height={iconWidth}
      />
      <img src={DockerIcon} alt="Docker" width={iconWidth} height={iconWidth} />
      <img
        src={KubernetesIcon}
        alt="Kubernetes"
        width={iconWidth}
        height={iconWidth}
      />
      <img src={MySQLIcon} alt="MySQL" width={iconWidth} height={iconWidth} />
      <img
        src={PostreSQLIcon}
        alt="PostgreSQL"
        width={iconWidth}
        height={iconWidth}
      />
      <img src={GitIcon} alt="Git" width={iconWidth} height={iconWidth} />
      <img
        src={GitHubActionsIcon}
        alt="GitHub Actions"
        width={iconWidth}
        height={iconWidth}
      />
    </Box>
  );
}
