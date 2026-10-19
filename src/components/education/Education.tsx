import { Box, Chip, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface EducationItem {
  id: string;
  current?: boolean;
}

const EDUCATION: EducationItem[] = [
  {
    id: "bachelors",
  },
  {
    id: "masters",
    current: true,
  },
];

function Education() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="education"
      aria-labelledby="education-heading"
      className="motion-in"
      sx={{ scrollMarginTop: "120px" }}
    >
      <Typography
        id="education-heading"
        component="h2"
        variant="h4"
        sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}
        gutterBottom
      >
        {t("education.title")}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t("education.subtitle")}
      </Typography>

      <Stack spacing={2}>
        {EDUCATION.map((item) => (
          <Box
            key={item.id}
            sx={(theme) => ({
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              bgcolor: item.current ? "background.paper" : "action.hover",
              border: "1px solid",
              borderColor: item.current ? "secondary.main" : "divider",
              boxShadow: item.current
                ? `0 8px 28px ${theme.palette.secondary.main}18`
                : "none",
            })}
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
                {t(`education.items.${item.id}.degree`)}
              </Typography>
              {item.current && (
                <Chip
                  label={t("education.current")}
                  size="small"
                  color="secondary"
                  sx={{ height: 24, fontWeight: 700, fontSize: ".72rem" }}
                />
              )}
            </Box>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 0.75 }}
            >
              {t(`education.items.${item.id}.institution`)}
            </Typography>
            <Typography
              variant="body2"
              color="secondary.main"
              fontWeight={700}
              sx={{ mt: 1.5 }}
            >
              {t(`education.items.${item.id}.dates`)}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default Education;
