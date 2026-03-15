import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import ProjectCard, { type ProjectCardProps } from "./ProjectCard";

interface ProjectConfig {
  id: string;
  image: string;
  link: string;
}

const PROJECTS: ProjectConfig[] = [
  {
    id: "project1",
    image: "./the-imposter.png",
    link: "https://the-imposter.app/",
  },
  {
    id: "project2",
    image: "./client-contract-api.png",
    link: "https://github.com/RoyCaroJE/client-contract-api",
  },
  {
    id: "project3",
    image: "./crypto-trading-simulator.png",
    link: "https://github.com/RoyCaroJE/crypto-trading-sim",
  },
];

function Projects() {
  const { t } = useTranslation();

  const projectCards: ProjectCardProps[] = PROJECTS.map((project) => ({
    title: t(`projects.items.${project.id}.title`),
    description: t(`projects.items.${project.id}.description`),
    image: project.image,
    link: project.link,
  }));

  return (
    <Box component="section" sx={{ py: { xs: 2, md: 3 } }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {t("projects.title")}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t("projects.subtitle")}
      </Typography>

      <Grid container spacing={3}>
        {projectCards.map((project) => (
          <Grid key={project.title} size={{ xs: 12, md: 6, lg: 4 }}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
