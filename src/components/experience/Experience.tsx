import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ExperienceItem {
  id: string;
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
}

interface ExperienceConfig {
  id: string;
  startDate: string;
  endDate?: string;
}

const EXPERIENCE: ExperienceConfig[] = [
  {
    id: "currentRole",
    startDate: "JUL 2026",
  },
  {
    id: "juniorRole",
    startDate: "APR 2025",
    endDate: "JUN 2026",
  },
  {
    id: "traineeRole",
    startDate: "OCT 2024",
    endDate: "MAR 2025",
  },
  {
    id: "internRole",
    startDate: "MAR 2024",
    endDate: "MAY 2024",
  },
];

function Experience() {
  const { t } = useTranslation();

  const items: ExperienceItem[] = EXPERIENCE.map((item) => ({
    id: item.id,
    title: t(`experience.items.${item.id}.title`),
    description: t(`experience.items.${item.id}.description`),
    startDate: item.startDate,
    endDate: item.endDate,
  }));

  return (
    <Box
      component="section"
      id="experience"
      aria-labelledby="experience-heading"
      className="motion-in"
      sx={{ py: { xs: 4, md: 6 }, scrollMarginTop: "120px" }}
    >
      <Typography
        id="experience-heading"
        component="h2"
        variant="h4"
        sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}
        gutterBottom
      >
        {t("experience.title")}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t("experience.subtitle")}
      </Typography>

      <Stack
        spacing={2}
        sx={{
          position: "relative",
          pl: { xs: 3, sm: 4 },
          "&::before": {
            content: '""',
            position: "absolute",
            left: { xs: 7, sm: 11 },
            top: 10,
            bottom: 10,
            width: 2,
            background: (theme) =>
              `linear-gradient(${theme.palette.secondary.main}, ${theme.palette.divider})`,
          },
        }}
      >
        {items.map((item) => (
          <Box
            key={`${item.title}-${item.startDate}`}
            sx={{
              position: "relative",
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              transition: "border-color 180ms ease, transform 180ms ease",
              "&:hover": {
                borderColor: "secondary.main",
                transform: "translateX(4px)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                left: { xs: -23, sm: -26 },
                top: 24,
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "secondary.main",
                border: "2px solid",
                borderColor: "background.default",
              },
            }}
          >
            <Typography component="h3" variant="h6" fontWeight={750}>
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="secondary.main"
              fontWeight={700}
              sx={{ mb: 1.5 }}
            >
              {item.startDate} - {item.endDate ?? t("experience.present")}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Experience;
