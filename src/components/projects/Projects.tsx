import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import ProjectCard, { type ProjectCardProps } from "./ProjectCard";

interface ProjectConfig {
  id: string;
  imageFallback: string;
  imageWebpSrcSet: string;
  link: string;
}

const PROJECTS: ProjectConfig[] = [
  {
    id: "project1",
    imageFallback: "./the-imposter.png",
    imageWebpSrcSet:
      "/optimized/the-imposter-380.webp 380w, /optimized/the-imposter-760.webp 760w",
    link: "https://the-imposter.app/",
  },
  {
    id: "project2",
    imageFallback: "./client-contract-api.png",
    imageWebpSrcSet:
      "/optimized/client-contract-api-380.webp 380w, /optimized/client-contract-api-760.webp 760w",
    link: "https://github.com/RoyCaroJE/client-contract-api",
  },
  {
    id: "project3",
    imageFallback: "./crypto-trading-simulator.png",
    imageWebpSrcSet:
      "/optimized/crypto-trading-simulator-380.webp 380w, /optimized/crypto-trading-simulator-760.webp 760w",
    link: "https://github.com/RoyCaroJE/crypto-trading-sim",
  },
];

function Projects() {
  const { t } = useTranslation();

  const projectCards: ProjectCardProps[] = PROJECTS.map((project) => ({
    title: t(`projects.items.${project.id}.title`),
    description: t(`projects.items.${project.id}.description`),
    imageFallback: project.imageFallback,
    imageWebpSrcSet: project.imageWebpSrcSet,
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
