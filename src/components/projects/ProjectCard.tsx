import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
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
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        transition:
          "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "secondary.main",
          boxShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0 20px 48px rgba(0,0,0,.28)"
              : "0 20px 48px rgba(29,61,48,.12)",
        },
      }}
      elevation={0}
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
          sizes="(max-width: 599px) calc(100vw - 32px), (max-width: 899px) calc(100vw - 48px), (max-width: 1199px) calc((100vw - 72px) / 2), 360px"
        />
        <Box
          component="img"
          src={imageFallback}
          alt={title}
          loading="lazy"
          decoding="async"
          width={380}
          height={220}
          sx={{
            width: "100%",
            display: "block",
            height: { xs: 210, sm: 220 },
            objectFit: "cover",
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: { xs: 2.5, md: 3 } }}>
        <Typography component="h3" variant="h6" fontWeight={750} gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.75 }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: { xs: 2.5, md: 3 }, pb: 2.5, mt: "auto" }}>
        <Button
          variant="contained"
          color="secondary"
          href={link}
          target="_blank"
          rel="noreferrer"
          endIcon={<ArrowOutwardIcon fontSize="small" />}
          sx={{ boxShadow: "none", "&:hover": { boxShadow: "none" } }}
        >
          {t("projects.viewProject")}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
