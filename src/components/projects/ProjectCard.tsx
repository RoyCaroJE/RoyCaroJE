import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageFallback: string;
  imageWebpSrcSet: string;
  link: string;
}

function ProjectCard({
  title,
  description,
  imageFallback,
  imageWebpSrcSet,
  link,
}: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
      }}
      elevation={2}
    >
      <Box
        component="picture"
        sx={{
          display: "block",
        }}
      >
        <source
          type="image/webp"
          srcSet={imageWebpSrcSet}
          sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 380px"
        />
        <Box
          component="img"
          src={imageFallback}
          alt={title}
          loading="lazy"
          decoding="async"
          width={400}
          height={180}
          sx={{
            width: "100%",
            display: "block",
            height: 180,
            objectFit: "cover",
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography component="h5" variant="h6" fontWeight={700} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          href={link}
          target="_blank"
          rel="noreferrer"
          sx={{ textTransform: "none" }}
        >
          {t("projects.viewProject")}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
