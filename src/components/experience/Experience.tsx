import { Box, Chip, Stack, Typography } from "@mui/material";
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
      sx={{ scrollMarginTop: "120px" }}
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
            left: { xs: 8, sm: 12 },
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
            sx={(theme) => {
              const isCurrent = !item.endDate;

              return {
                position: "relative",
                p: { xs: 2, sm: 3 },
                borderRadius: 3,
                bgcolor: isCurrent ? "background.paper" : "action.hover",
                border: "1px solid",
                borderColor: isCurrent ? "secondary.main" : "divider",
                opacity: isCurrent ? 1 : 0.76,
                boxShadow: isCurrent
                  ? `0 8px 28px ${theme.palette.secondary.main}18`
                  : "none",
                transition:
                  "border-color 180ms ease, transform 180ms ease, opacity 180ms ease",
                "&:hover": {
                  borderColor: "secondary.main",
                  transform: "translateX(4px)",
                  opacity: 1,
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: { xs: -16, sm: -20 },
                  top: 24,
                  width: isCurrent ? 14 : 12,
                  height: isCurrent ? 14 : 12,
                  borderRadius: "50%",
                  transform: "translateX(-50%)",
                  bgcolor: isCurrent ? "secondary.main" : "text.disabled",
                  border: "2px solid",
                  borderColor: "background.default",
                  boxShadow: isCurrent
                    ? `0 0 0 4px ${theme.palette.secondary.main}22`
                    : "none",
                },
              };
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "flex-start", sm: "center" },
                justifyContent: "space-between",
                gap: 1.5,
                flexWrap: "wrap",
              }}
            >
              <Typography component="h3" variant="h6" fontWeight={750}>
                {item.title}
              </Typography>
              {!item.endDate && (
                <Chip
                  label={t("experience.current")}
                  size="small"
                  color="secondary"
                  sx={{ height: 24, fontWeight: 700, fontSize: ".72rem" }}
                />
              )}
            </Box>
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
