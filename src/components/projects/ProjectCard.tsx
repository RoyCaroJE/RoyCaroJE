import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function ProjectCard({ title, description, image, link }: ProjectCardProps) {
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
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 180,
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={700} gutterBottom>
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
