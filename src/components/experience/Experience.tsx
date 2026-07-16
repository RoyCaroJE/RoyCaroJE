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
    id: "previousRole",
    startDate: "APR 2025",
    endDate: "JUN 2026",
  },
  {
    id: "earlierRole",
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
    <Box component="section" sx={{ py: { xs: 2, md: 3 } }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {t("experience.title")}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t("experience.subtitle")}
      </Typography>

      <Stack
        spacing={2}
        sx={{
          position: "relative",
          pl: 4,
          "&::before": {
            content: '""',
            position: "absolute",
            left: 11,
            top: 8,
            bottom: 8,
            width: 2,
            bgcolor: "divider",
          },
        }}
      >
        {items.map((item) => (
          <Box
            key={`${item.title}-${item.startDate}`}
            sx={{
              position: "relative",
              p: 2,
              borderRadius: 2,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              "&::before": {
                content: '""',
                position: "absolute",
                left: -26,
                top: 22,
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "secondary.main",
                border: "2px solid",
                borderColor: "background.default",
              },
            }}
          >
            <Typography component="h5" variant="h6" fontWeight={700}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {item.startDate} - {item.endDate ?? t("experience.present")}
            </Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Experience;
